# water-tracker
This application is able to track your water consumption.

You will need Ionic for the frontend and at least Gradle 5.4.1 for the backend.
You can run it locally or even put it on a server.

First run the backend.
1. cd into the water-tracker-backend/
2. run 'gradle bootRun'
Run the frontend.
1. you have to update the url to call the backend. 
   In water-tracker-frontend/src/service/drink-service.ts you can change the url.
2. cd into the water-tracker-backend/
3. run 'ionic serve'

Enjoy the app.

If you want improvements just open up an issue.

If you want to appreciate the work you are free to donate. :)
<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick" />
<input type="hidden" name="hosted_button_id" value="B6PS4BA5UJVQJ" />
<input type="image" src="https://www.paypalobjects.com/en_US/DK/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
<img alt="" border="0" src="https://www.paypal.com/en_DE/i/scr/pixel.gif" width="1" height="1" />
</form>
