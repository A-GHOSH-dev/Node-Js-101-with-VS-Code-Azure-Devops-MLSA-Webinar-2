# CONTRIBUTION GUIDE

## Preliminaries

- Download and install the latest stable version of [Git](https://git-scm.com/downloads) 📥 for version control
- Create a [Github](https://github.com/join) Account 📇
- Download and install latest stable version of [VS Code](https://code.visualstudio.com/download)

## Issues
- You can visit the issues created by the maintainer. And comment below the issue, if you want to work on this issue. And mention in approximately how many days you can create a PR.

> ### Guidelines for raising a new issue:
>
> - Each issue should have an appropriate and short title like "Building a Web Scrapper App using Nodejs" or "Fixing the bug in Quiz App- Bug description"
>
> - Whenever a participant raises an issue, by default it would be assigned to that participant due to obvious reasons. 
>
> - Be specific about your intended changes/suggestions

##   A. Setting up the Project

**1.**  Fork [this](https://github.com/A-GHOSH-dev/Node-Js-101-with-VS-Code-Azure-Devops-MLSA-Webinar-2) repository.

**2.**  Clone your forked copy of the project.

```
git clone --depth 1 https://github.com/<your_user_name>/Node-Js-101-with-VS-Code-Azure-Devops-MLSA-Webinar-2.git
```

**3.** Navigate to the project directory :file_folder: .

```
cd Node-Js-101-with-VS-Code-Azure-Devops-MLSA-Webinar-2
```

**4.** Add a reference to the original repository.

```
git remote add upstream https://github.com/A-GHOSH-dev/Node-Js-101-with-VS-Code-Azure-Devops-MLSA-Webinar-2.git 
```

**5.** Check the remotes for this repository.

```
git remote -v
```

**6.** Always take a pull from the upstream repository to your master branch to keep it at par with the main project(updated repository).

```
git pull upstream master
```
##  B. Contributing to the Project

- Once the project maintainer(s)/mentor(s) have reviewed the issue/assigned you the issue. Start working on the changes.

**1.** Create a new branch (DO NOT name it MAIN or MASTER or anything random).

```
git checkout -b <your_branch_name>
```

**2.** Perfom your desired changes to the code base.
- Make sure that you do not change any code unrelated to the task that you have been assigned

- Ensure that your changes apply to all screensizes

- Comment any new code addition(s)

- Do not mess up the directory structure

- Preview your changes and test them properly before proceding ahead

- Make a small clip or take screenshots before and after making changes.


**3.** Track your changes:heavy_check_mark: 

```
git add . 
```

**4.** Commit your changes .

```
git commit -m "Relevant message"  (usually title of the pull request)
```
- **Make sure to condense your changes into a single commit**.

**5.** Push the committed changes in your feature branch to your remote repo.

```
git push -u origin <your_branch_name>
```

**6.** To create a pull request, click on `compare and pull requests`. Please ensure you compare your feature branch to the desired branch of the repo you are suppose to make a PR to.

**7.** Then add an appropriate title and description to your pull request that explains your changes and efforts done.

**8.** Click on `Create Pull Request`.

> ### Guidelines for raising a pull request:
>
> - Each pull request should have an appropriate and short title like "Built a Quiz App in Nodejs: Folder Name- quizapp"
> - Each project will be inside a folder with name of the project, e.g. Blog app using node will be inside a folder named blogapp.
>
> - In case of multiple commits, please perform a rebase and make a squash commit before giving the pull request.
>
> - Pull Requests without a description would often not be reviewed. Make sure you describe your intended changes in the description section of the pull request. (Use bullet points and phrases)
>

**9.** Voila :exclamation: You have made a PR to the repo :boom: . Sit back patiently and relax while the project maintainers review your PR. Please understand at times the time can vary from a few hours to a few days.

<p align="center"><img src="https://media.giphy.com/media/5mCQOcUfywmyI/giphy.gif" width=35%></p>
