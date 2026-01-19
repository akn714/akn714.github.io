Git is a version control system, it basically means that it is a tool that is used in development to store your project file and folders safely and securely.

Before getting started, let’s install Git in your laptop.

Step1: Download the Git from [this](https://git-scm.com/downloads) website according to your Operating System.

Step2: After downloading it simply install it with default settings.

Step3: Now, you have installed git.

### **Configuring your Git to connect with your Github account**

You have to run only 2 commands to configure your git.

```
git config --global user.name [your github username]
```

Run the above command with your Github username.

```
git config --global user.email [your email]
```

Run the above command with your email by which you have registered on Github.

Now, you can verify these configurations by running the below commands.

```
git config --global user.name
git config --global user.email
```

Your git is now configured. You are now good to go!

### **Getting started with Git**

Let’s say you already have a project. let’s use Git on it.

First, open your terminal and navigate to your project and initialize Git in it through the below command.

```
cd /path/to/your/project
git init
```

Now, you are ready to use Git in your project.

### **Git stages**

There are 4 stages in Git.

1.  Untracked
2.  Unmodified
3.  Modified
4.  Staged

![git log](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*b4h57sjytoT1cUpPLk3q6A.png)

You can learn more about these stages in [this](https://medium.com/opendev-blog/the-three-stages-of-git-16565bfa67e5) blog.

### **Git commands**

There are commonly 10 commands you need to learn in Git, mostly these commands are used in development.

1.  git add
2.  git commit
3.  git log
4.  git status
5.  git restore
6.  git pull
7.  git push
8.  git diff
9.  git config
10.  git remote

**git add**

This command is used to send files to unmodified area.

```
git add .
```

**git commit**

> commit basically means a check point.

This command is used to commit all the changed or in other words save the changed project.

```
git commit -m '[message]'
```

you have to type a message to specify the changes you made in the commit, it can be anything by which you can identify the changes made like ‘added package.json file’, ‘moved all the images to /images folder’, etc.

**git log**

This command is used to list all the commits made in the project.

```
git log
```

**git status**

This command show what files were changed in the project and is the files are untracked, modified or unmodified.

```
git status
```

**git restore**

This command is used to restore the previous checkpoint of a file if it was changed accidentally.

```
git restore
```

**git pull**

This command is used to pull commits from remote repository.

```
git pull
```

**git push**

This command is used to upload commits from local to remote repository.

```
git push
git push -u origin main # when pushing commits from local for the first time
```

**git diff**

This command is used to check the changes made in the file.

```
git diff [filename]
```

**git config**

This command is used to configure git in local.

```
git config --global user.name [github username] # set username
git config --global user.email [github account email] # set user email
git config user.name # display username
git config user.email # display user email
```

**git remote**

This command is used to add a remote repository to a local repo.

```
git remote add origin [github repository link] # set remote repository
git remote -v # display remote repository
```

### Guide to connect your Github account to Git

step 1: generate a ssh key: `ssh-keygen -t ed25519 -C "[your email]"`, at `[your email]` type the email through which you are signed-in on github.com

step 2: evalute the key: `eval "$(ssh-agent -s)"`

step 3: add key to ssh: `ssh-add ~/.ssh/id_ed25519`

step 4: go to `~/.ssh` and copy the public key from `id_ed25519.pub` file

step 5: paste the copied public key to [github keys](https://github.com/settings/keys)

step 6: now you can push and pull from github to your local

**note:** type `yes` if asked `Are you sure you want to continue connecting (yes/no/[fingerprint])?` during pushing the code first time (To push the code for first time use `git push -u origin main`)