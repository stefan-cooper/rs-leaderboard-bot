# Contributing

In case you are a git newb, here is a couple of things to get you started.

## Using Git

Git Workflow

### Cloning the repository

Before this, ensure your ssh key and github account is all appropiately set up with your machine. (Let me know if you need a hand with this, or follow the [instructions on GitHub](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent))

1. Using terminal, navigate to an appropiate directory and do `git clone git@github.com:stefan-cooper/rs-leaderboard-bot.git` This will clone the remote repository to your machine
2. You now have the repository on your machine, I will list process of going from nothing to submitting a pull request

### Getting started with working on the repo

In our repo, we disallow pushing directly to master so we will always need to work in a different branch to get work done.

1. In the repo directory do `git checkout -b enterYourBranchNameHere`
2. It's not important what your branch name is, but having something which makes it clear what feature you're working on is generally good practise.
3. It's good practise to work on small features and slowly integrate them into `main`, rather than working on a huge implementation that could cause merge conflicts later.
4. Once you're in your branch you can start working on whatever you're working on, you can save freely without worrying about breaking `main` as you're working in a separate branch.

### Committing and saving your changes

While you work on your features, once again it is generally good practise to make lots of small commits as you go, so you have an easily traceable path in case you break something and want to know how it happened.

1. Once you're finished working on your feature, head to your repo dir do `git status`
2. You should now see your changed/new files in red, you should check your changed files with `git diff fileName`
3. Once you're happy with the files changes and you want to commit them, do `git add fileName` on each file individually (there are ways of adding all files at once which you can look up online, but it's better to indivudually `diff` each one and add them like that personally)
4. Once you've added all the files you plan on adding, do `git commit -m 'Enter your commit message here'`
5. It's not too important what your commit message is, but it is generally quite good to have a recognizable message so you can trace what you worked on in that commit

### Saving your changes remotely and PUSHING

You can commit many times before having them saved online. The way we save online is done via `push` to the remote repo.

1. Once you're happy with the work you've done, or if you want to show your work to me remotely; you will need to push your work online to GitHub. You can do this by navigating to the repo dir and doing `git push origin yourBranchName`
2. Your work should now be pushed and viewable as a new branch on GitHub

### Getting your work merged into main

As mentioned before, we can't push directly to master so we will need to create a pull request to merge all work finished by yourself.

1. To create a pull request, navigate on GitHubs web page to your branch and click `New Pull Request`
2. From there you have a pretty self-explanatory UI to create your pull request, enter a descriptive title and a short description of the changes made.
3. Once you've added it, you can request code reviewers using the UI, or you can @ me in the discord and I will review it for you.

### Reviewing code

It is important that all code goes into the `main` is clean and isn't going to break anything. So it is important we ask questions and push on why we are doing things in specific ways and offer suggestions on how to improve the code.

1. Open the pull request assigned to you in GitHub
2. Read the description and title thoroughly and have a read through the changes made in the files
3. Once you've decided whether you're satisfied/unsatisfied with the code changes, submit your review and then @ me again to tell me what you said

## Picking up new work

TODO