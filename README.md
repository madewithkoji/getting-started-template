# **Welcome to Koji.**

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

## File Explorer

On the left, there is a file explorer that consists of three sections:

- The **Code** section has the various folders and files that comprise your project.

- Above it is the **Configuration** section that lists Visual Customization Controls (VCCs) that we will discuss shortly.

- Above that is the **Project** section that allows you to control project properties, and Deploy your project to production.

## File Explorer / Code Section

- Koji projects are Git repositories, so you will find a .gitignore file. You will also find a .editorconfig file that specifies some customizable Koji editor parameters. **There is no reason to mess with those files at this time.**

- This project is a match 3 game similar to CandyCrush. It has a **frontend** and a **backend** (for storing high scores on a leaderboard).

- This game is built with ReactJS, although **Koji supports all kinds of JavaScript projects:** Angular, Vue, React, Polymer, or just raw JavaScript.

- The main file in the **frontend** can be found at `~/frontend/pages/GamePage/index.js` Feel free and play around with the code. You can edit it and save to see the results in the Preview window. This project uses React Styled Components, so you can edit the CSS directly in the JS file.

- The **backend** is using Express.js, and has two routes (AddScore and GetScores). When you are editing backend js files, there is a live backend preview on the right hand side that allows you to send requests and get responses from the endpoints (so there is no need to use a third party app such as Postman).

-------

**The code section also has a hidden folder (.koji) that is colored in gray. If you expand the folder, you will see a number of JSON files.**

- `~/koji/resources/scripts/buildConfig.js` is a few functions that are used by the editor to parse the project’s directories and facilitate configuration interfaces.

- `~/koji/resources/develop.json` is the configuration of the development environment

- `~/koji/resources/deploy.json` is the configuration of the deployment pipeline

The rest of the files in `~/koji/resources/` are optional, and were created by the template developer. These files are parsed by `~/koji/resources/scripts/buildConfig.js` and rendered in the **File Explorer / Configuration section.**
## File Explorer / Configuration

The developer of a template can optionally create configuration files that we call Visual Customization Controls (VCC’s). These files are intended to make it easier for people who have cloned the template to customize it. They are JSON files, and get rendered as visual interfaces. You may create additional VCCs by adding a new file to the ~/koji/resources/ directory. **You should play around with them to see how easy it is to customize this game, without touching a single line of code.**


## Koji Collaboration Tools

At the top right of the Koji editor there is a blue “Collaborate” button. Koji makes it easy for multiple people to work on the same code files simultaneously… just like Google Docs. When you click on the Collaborate button, you can get a link to share with people, and ask them to join your session (note: the link will expire 15 minutes after it is created).

<video width="480px" autoplay loop>
  <source src="https://giant.gfycat.com/TornAshamedLeech.webm" type="video/webm">
</video>

Once they click on the link, you will be notified that they want to join, and will need to accept them. During the session, the owner of the project is the only one who can choose what files are worked on (the collaborator cannot open files on their own). Once you are done collaborating, either of you may end the session.

## Messaging and Posts

At the top right of the Koji editor, to the left of the Collaborate button, there is a messaging icon. Koji has a built-in instant messenger, similar to Facebook Messenger, so you can easily chat with others on the network.

<video width="480px" autoplay loop>
  <source src="https://giant.gfycat.com/GrotesqueDearestAxisdeer.webm" type="video/webm">
</video>

If you have an issue or a request, you may create a “Post”. To view the posts page, go to: https://gokoji.com/posts. Other users of Koji may see your post and reply to it via an instant message to you. This is a good way to ask the community for help if you get stuck on some coding issue. [See video for example](https://youtu.be/0eTLzwVTJUE).

## Deploying your project to Production (turning it into a web app)

Koji makes it super easy to deploy your project. Simply click on the “Deploy project” link at the top left, in the File Explorer / Project section. Choose a subdomain for your project, and click the “Deploy Now” button. Koji will automatically package your project, and do all of the dev ops work. It takes less than a minute and you are in production.  

<video width="480px" autoplay loop>
  <source src="https://giant.gfycat.com/AshamedMindlessCaiman.webm" type="video/webm">
</video>

## Koji is moving fast and has new features coming soon!

If you have any questions about this template, or anything else, there are a number of ways to reach us and the community.

1. Create a Post in Koji by clicking on the Message icon at the top right, and using the Posts tab.
2. Send email to contact@gometa.io
3. Join our [Koji Developers Facebook Group](https://www.facebook.com/groups/341722053120034/)