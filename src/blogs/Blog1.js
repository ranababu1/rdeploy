import React from 'react';
 
const Blog1 = ()=>{
   return (
       <div className="container App">
       <h1>How to cancel a sent email in gmail</h1>
       <div className="entry-content">

    <p>While sending email to someone you may accidentally send an email while was not supposed to be sent to them. Such
        scenario may be very embarrassing and if such incident can be undone it may be of great&nbsp;boon for many
        internet users, including me. I have been using this feature for the last several&nbsp;years as&nbsp;a separate
        app / add-on in gmail which was a part of&nbsp;as&nbsp;<a
            href="http://gmailblog.blogspot.in/2009/03/new-in-labs-undo-send.html">Gmail Labs</a>. But now it is an
        official part of gmail and in order to set it correctly you can follow the below mentioned steps. Many of you
        may have wondered&nbsp;how to cancel a sent email in gmail, well here is your answer.</p>
    <ul>
        <ul>
            <li>First, log in to your Gmail account on your computer.</li>
            <li>Click the Settings icon in the upper right corner of the screen</li>
            <li>From the Settings window, make sure the General tab is selected (which is selected by default).</li>
            <li>Look for the setting that says Undo Send.</li>
            <li>Click the checkbox to Enable Undo Send.</li>
            <li>Click the dropbox to set the Send cancellation period, meaning the number of seconds you have to prevent
                the email from being sent. You can choose 5, 10, 20 or 30 seconds.</li>
            <li>Scroll to the bottom of the Settings screen and click the Save Changes button.</li>
            <li>To test the feature, click the Compose button at the upper left corner of your Gmail account page.</li>
            <li>Compose a message and then click the Send button.</li>
            <li>At the top of the screen, you’ll see a message that says: “Your message has been sent. Undo. View
                Message.”</li>
            <li>To prevent the message from being sent, click the Undo link.</li>
            <li>Gmail stops the message from going out and displays it in case you wish to make any changes and then
                resend it. If not, you can simply close the message, and it’s stacked to your Drafts folder where you
                can keep it or delete it.</li>
        </ul>
    </ul>
    <p>The Undo Send feature is a great facility to revert your decision of sending an email which you have send
        already. But be advised that it will work for a limited time which means that you have to UNDO quickly in order
        to stop the email from sending. Basically, what <a href="http://gmail.com">gmail </a>does is that it waits for a
        certain period (as specified by you while setting up this feature) before sending the email.</p>

</div>
   </div>
   )
}
 
export default Blog1;