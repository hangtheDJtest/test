# Hang the DJ

Remember that episode of Black Mirror called [Hang the DJ](https://en.wikipedia.org/wiki/Hang_the_DJ_(Black_Mirror)) where an all knowing computer tried to match people together to find their "ultimate compatible other"?

Well, this novelty web app hopes to recreate the "Coach" device the characters use in the show.

Usage:

http://mtagius.com/hang-the-dj/?name=NAME&photo=PHOTO&expiration=EXPIRATION

NAME: The name of the person you want to appear on the page

PHOTO: A direct link to a picture of the person

EXPIRATION: The expiration time in this format 0,0,0,12,0,0

The first number is for years, the second for months, the third for days, hours, minutes, and seconds

Example:  http://mtagius.com/hang-the-dj/?name=Obama&photo=https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_400x400.jpg&expiration=0,0,0,12,0,0

If the expiration has 0 listed for the years, months, and days an expiration countdown will appear after the user clicks the fingerprint button.  If the expiration has a value that's not 0 for any of those numbers the countdown will not appear and the largest value will be shown to display the expiration.

![Picture of the app](https://github.com/mtagius/hang-the-dj/blob/master/advertisement-screenshots/1.png)

![Picture of the app](https://github.com/mtagius/hang-the-dj/blob/master/advertisement-screenshots/2.png)

![Picture of the app](https://github.com/mtagius/hang-the-dj/blob/master/advertisement-screenshots/3.png)
