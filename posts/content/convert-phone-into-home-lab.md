Here is the quick guide to turn your old Phone into a 24/7 Linux Home Server using Termux.

### 1. Prepare the Phone
Open Termux and run these commands one by one:

```bash
# Update everything
pkg update && pkg upgrade -y

# Install SSH
pkg install openssh

# Set a password (you need this to log in!)
passwd

# Find your local IP (look for 192.168.x.x)
ifconfig

# Start the SSH Daemon (CRITICAL STEP)
sshd
```

### 2. Connect from Laptop
Open your terminal (PowerShell or Terminal) and type:

```bash
# Replace with your phone's IP
ssh -p 8022 192.168.1.XX
```
Enter the password you set in Step 1.

### 3. Transfer Your Code
You can either git clone your repo or upload a zip file. To upload a zip from your laptop:

```bash
# Run this on your laptop, NOT inside the SSH session
scp -P 8022 my-app.zip 192.168.1.XX:~
```

Back on the phone:
```bash
pkg install unzip
unzip my-app.zip
cd my-app
```

### 4. Install Node.js & Run App
```bash
# Install Node.js (LTS version is best)
pkg install nodejs-lts

# Install dependencies
npm install

# Install PM2 (Process Manager)
npm install -g pm2

# Run your app (Adjust for your specific script, e.g., "start" or "dev")
pm2 start npm --name "my-app" -- start
```

### 5. Make it Public (Cloudflare Tunnel)
Expose your localhost to the world for free.
```bash
pkg install cloudflared

# This gives you a random public URL
cloudflared tunnel --url http://localhost:3000
```

---

#### Pro Tips

**SSH from Anywhere (Tailscale) If you aren't on the same WiFi as your phone (e.g., you are at a cafe), the local IP won't work.:**
- Install the Tailscale App on both your Android phone and your Laptop.
- Log in to both with the same account to create a secure mesh tunnel.
- Use the Tailscale IP (usually starts with 100.x.x.x) instead of the WiFi IP. Now you can SSH into your phone from anywhere in the world!

**Prevent the App from Sleeping Android kills background apps to save battery. To stop this:**
- Pull down your notification bar.
- Tap "Acquire Wakelock" on the Termux notification.
- Or run this command: termux-wake-lock

#### Next.js 15+ Issues? If your app crashes on native Termux (common with newer Next.js versions), install Ubuntu inside Termux:
```bash
pkg install proot-distro
proot-distro install ubuntu
proot-distro login ubuntu
```
Now you are in a real Ubuntu environment! Install Node/PM2 here.

>credits: [Convert Phone into Home Lab/Server](https://sagartamang.com/blog/android-to-home-lab?utm_source=sp_auto_dm&utm_referrer=sp_auto_dm#-turn-your-old-phone-into-a-247-home-server)