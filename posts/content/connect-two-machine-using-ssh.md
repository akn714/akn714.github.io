Let’s name the 2 machines WM1and WM2 which means windows machine 1 and windows machine 2.

In this blog we will access WM1 from WM2. (WM1 -> target, WM2 -> host)

So, install OpenSSH Server in WM1 and OpenSSH Client in WM2 (To do so you have to visit settings > optional features > add optional features > install OpenSSH Server).

**Step1:**

Generating SSH keys in WM2 (host).

\`\`\`bash
ssh-keygen -t ed25519 -C '[email address]'
\`\`\`

by executing this command, 2 files will be generated, one with .pub extension and other with no extension

*   .pub represents public key
*   and file with no extension represents private key

**Step2:**

Copy the .pub file from WM2 (host) to WM1 (target), this file should be stored in \`~/.ssh/\` folder in WM1.

**Step3:**

Now, everything is set, try logging in to WM1 from WM2.

\`\`\`bash
ssh [user username of pc2]@[ip address of pc2]
\`\`\`

example:

\`\`\`bash
ssh user@192.168.14.5
\`\`\`

Now, you can access shell of WM1 (target) from WM2 (host) without any password.