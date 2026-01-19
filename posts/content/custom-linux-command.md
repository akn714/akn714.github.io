Here are a few basic steps that you can follow to write your own custom command in bash.

**step 1:** open terminal

**step 2:**
```bash
nano ~/.bashrc
```
If `.bashrc` does not exists in `~` (root) directory then crate one using the below commands and follow the next step
```bash
cd ~
touch .bashrc
```

**step 3:**

write your custom command in `.bashrc` file
```bash
alias [your custom command name]: echo hello
```

**step 4:**

After editing the file, save it and exit.

Then, enter the below command in terminal to execute `.bashrc` file
```bash
source ~/.bashrc
```

### Writing custom commands in bash using bash functions
follow the similar steps as above to write custom commands, just you have to change the step 3, instead of `alias` you have to write a function in bash language in `.bashrc` file.

write a function as below

```bash
# syntax
# function [custom command name](){
#    # do stuff
# }

# example
function hello(){
    echo hello-world
}
```

Now, we can access the above example function in terminal by typing the below command

```bash
[foo@parrot]─[~/Desktop/coding/github] $hello

# output
[foo@parrot]─[~/Desktop/coding/github]
hello-world
```

#### Taking parameters in custom command

we can take parameters in custom command by using $1 , $2 , $3 , etc.

**example:**<br>
```bash
function hello(){
    echo hello again $1
}

# output
[foo@parrot]─[~/Desktop/coding/github] hello bar
hello again bar
```

we can take as many parameters as you want using `$1` , `$2` , `$3` , etc.