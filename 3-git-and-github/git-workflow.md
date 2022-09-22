# create repo
> mkdir myrepo
> cd myrepo
> git init
> ls -la .git

# create and add file
touch newfile
git add newfile

# set user credentials
git config --global user.email "you@example.com"
git config --global user.name "Your Name"

# commit file to staging area
git commit -m "added newfile"

# create a branch
git branch my1stbranch

# check out existing branches - * shows active branch
git branch

# change active branch and check branch list again
git checkout my1stbranch
git branch

# shortcut: create and change active directory
git checkout -b my1stbranch

# create and write new file to the active branch
echo 'Here is some text in my newfile.' >> newfile

# verify changes in that file
cat newfile

# create README file
touch readme.md

# add readme to staging area
git add readme.md

# check status of file
git status

# shortcut: add all files
git add *

# check status again
git status

# commit changes
git commit -m "added readme.md modified newfile"

# get a history of recent commits
git log

# revert to previous committed changes
# NOTE: If you don't specify the --no-edit flag you may be presented with an editor screen showing the message with changes to be reverted. In that case, press the Control (or Ctrl) key simultaneously with X.
git revert HEAD --no-edit

# merge contents into the main branch - switch active repo
git checkout main

# merge branch to current active master branch
git merge my1stbranch
git log

# after successful merge, delete the branch
git branch -d my1stbranch