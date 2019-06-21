# **Welcome to Koji.**
<iframe style="border: 10px" width="560" height="315" src="https://www.youtube.com/embed/t5uoqPFInlY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<h2 style='border-bottom: none'><a target="_blank" href="https://discord.gg/eQuMJF6">Join our Discord Server!</a> There are developers online right now and ready to help you!</h2>

You now have a Project that you cloned from the Koji Template Store, and are ready to make it your own. Your project is staged in the cloud (on Amazon EC2 in a Docker Container), and is ready to be deployed at anytime with the click of a button (see “Deploy Project” link at the top left)... **but don’t do that just yet.**

## Readme.md

This file is a readme markdown file. You may actually see the markdown code, by clicking on the “code” tab at the top:

<video width="480px" autoplay loop>
  <source src="https://giant.gfycat.com/RegalCluelessCats.webm" type="video/webm">
</video>

**Try This Now**

- Edit a line in the code tab and save the changes (CMD+S on Mac or CTRL+S on Windows / Linux)
- Then go back to the visual tab.

You will frequently encounter this pattern in the Koji editor; the ability to see the underlying code, and the visual interfaces that it creates.

## Terminal

There is a terminal at the bottom, and you can toggle collapse it by clicking on the header. You can install new packages in your project via “npm install.” For now, this project has everything that you need to get acclimated, so you may want to collapse the terminal window.

<video width="480px" autoplay loop>
  <source src="https://giant.gfycat.com/ShowyDeliciousElephantseal.webm" type="video/webm">
</video>

## Preview

There is a Preview window embedded on the right that allows you to preview your application. Think of it like a ‘remote local host’. It is hot reloaded, so when you make changes to your code and save them, the preview should automatically rebuild. If it doesn’t there is a refresh button at the top where you can force reload. There are a few other buttons as well:

<video width="480px" autoplay loop>
  <source src="https://giant.gfycat.com/RightBrownIberiannase.webm" type="video/webm">
</video>

Click on the Embedded preview Dropdown, and you will see a QR code that you can scan with your phone to get the live preview on your device. You will also be able to see the logs from your mobile device once it is connected. Clicking on the Embedded preview again will take you back to the default view. 

<video width="480" autoplay loop>
  <source src="https://giant.gfycat.com/WindyDrearyAxisdeer.webm" type="video/webm">
</video>

The eye icon slides out a console where you can see logs, errors, etc. It shows the same info as in the Chrome Dev Tools Console. If you want to get access to the actual Chrome Dev Tools Console, simply right-click on the preview window, and choose Inspect. 

The box arrow icon opens up a new tab so you can load the preview in full screen.

## **On the left, there is a file explorer that consists of three main buckets.**

**1. PROJECT**

This holds all of the top-level, Koji-specific features for your project. It has three sections, each with a few sub-sections.

- _Deploy_
  - `Deploy now` - Deploy your project to the web
  - `Domains` - Configure a domain for your project
  - `Plugins` - Emable Plugins that enable you 
  - `Scheduled` jobs - Create automated pieces of work for your application on a recurring schedule
  - `Versions` - View all of the deployed versions of your project & the deployment logs

- _Grow_
  - `Social sharing` - Share your deployed app to Social Media
  - `withKoji.com` - Submit your delpoyed app to [WithKoji.com](https://withkoji.com/)
  - `Analytics` - View your app's preformance
  - `App Stores` - (Coming Soon) Seamlessly distribute your app to app stores and platforms. 
  - `Aggregators` - (Coming Soon) Easily submit your application to aggregators like ProductHunt
  - `Database` - (Coming Soon) Database options & controls

- _Settings_
  - `General` - Find your Git repository info
  - `Development` - Access informations about your development environment
  - `Activity` - See the most recent project commits

**2. CUSTOMIZATION**
- The developer of a template can optionally create configuration files that we call Visual Customization Controls (VCC’s). These files are intended to make it easier for people to customize the design elements of a template. They are JSON files that get rendered as visual interfaces. 
- You may create additional VCCs by adding a new file to the ~/koji/customization/ directory. 

- **Play around with some VCC's to see how easy it is to customize this game, without touching a single line of code.**


**3. CODE**
- _The first folder in all Koji projects is a grayed folder (.koji). Inside, you will see four folders. You don't need to worry about these files, but feel free to open up the 'about.md' files to learn more about each folder._
  - `~/koji/customization/...` -- holds the JSON files for your VCC's seen in the _Customization_ section.
  - `~/koji/hooks/...` -- holds scripts for docker to run after certain events have occurred.
  - `~/koji/project/...` -- holds all of the neccesary files for your web app to work in koji.
  - `~/koji/scripts/...` -- holds the scripts that help to package & deploy your application.


- _The following files contain all of the code that makes the application work on. They will vary depending on the application._ 
  - This project is a "Match Three" game similar to CandyCrush. 
  - It has a `frontend` and a `backend`.
  - It is built with ReactJS
    - **NOTE: Koji supports all kinds of JavaScript projects:** 
    - Angular, Vue, React, Polymer, or just raw JavaScript.
  - It uses React `styled-components`, so you can edit the CSS directly in each JS file.
  - The main file in the `frontend` can be found at `~/frontend/pages/GamePage/index.js` 
    - Feel free and play around with the code. You can edit it and save to see the results in the Preview window. 
  - The `backend` (for storing high scores on a leaderboard) uses Express.js, and has two routes: `AddScore` & `GetScores`. 
    - When you are editing backend js files, there is a live backend preview on the right hand side that allows you to send requests and get responses from the endpoints (so there is no need to use a third party app such as Postman).

- _Lastly, Koji projects are Git repositories, so you will find a .gitignore file. There is no reason to mess with this file at this time._

-------

**The code section also has a grayed folder (.koji) that is colored in gray. Inside, you will see a number of folders. You don't need to worry about these files, but feel free to open up the 'about.md' files to learn more about each folder.**

- `~/koji/customization/...` -- holds the JSON files for your VCC's seen above.

- `~/koji/hooks/...` -- holds scripts for docker to run after certain events have occurred.

- `~/koji/project/...` -- holds all of the neccesary files for your web app to work in koji.

- `~/koji/scripts/...` -- holds the scripts that help to package & deploy your application.

## Koji Collaboration Tools

At the top right of the Koji editor there is a blue “Collaborate” button. Koji makes it easy for multiple people to work on the same code files simultaneously, just like Google Docs. **To collaborate with someone:**
- Click on **'Collaborate'** at the top right of your window
- You will get a link to share with people & ask them to join your session 
  - **NOTE: the link will expire 15 minutes after it is created**.

<video width="480px" autoplay loop>
  <source src="https://giant.gfycat.com/TornAshamedLeech.webm" type="video/webm">
</video>

- Once they click on the link, you will be notified that they want to join, and you will need to accept them. 
- During the session, the owner of the project is the only one who can choose what files are worked on (the collaborator cannot open files on their own). 
- Once you are done collaborating, either of you may end the session.
  - Click on your profile icon
  - Click **"End Session"**

## Deploying your project to Production (turning it into a web app)
*Click into `Deploy>Deploy now` and follow the instructions at the top of the tab...or watch this short video.*
<iframe width="560" height="315" src="https://www.youtube.com/embed/RFJfByIuDiE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Koji is moving fast and has new features coming soon!

If you have any questions about this template, or anything else, there are a number of ways to reach us and the community.

1. Create a Post in Koji by clicking on the Message icon at the top right, and using the Posts tab.
2. Send email to contact@gometa.io
3. Join our [Koji Developers Facebook Group](https://www.facebook.com/groups/341722053120034/)