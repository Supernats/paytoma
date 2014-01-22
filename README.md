"SUPER SWEET APP NAME" is an app for splitting bills with your friends.

TA Issues:
+ Bootstrapping current user (bill-app.js)
+ jquery.serializeJSON is causing errors when attempting to push to Heroku
+ Whether loan data should be collected by loan view and sent up to transaction
    + views/transactions/tranaction-new.js
    + view/loans/loan-new.js


Basic stuff:
+ Let you add your friends as contacts for quick bill splitting with your most-used contacts.
+ Keep a running tally of your debts and credits with all your friends, with a history of the events that got you there.

Doable stretch:
+ Store debts and credits in different currencies and convert them on demand using open currency API. (Should this conversion be based on the date of the transaction or the date you're making the conversion. I believe the API has a history to support both.)
+ Integrate with PayPal API to send invoices with notification emails.
+ Integrate with Facebook/Google to provide quick access to friends.

Rails is such a TODO:
+ [x] - Sign up
+ [x] - Sign in
+ [ ] - Forgotten password
+ [ ] - Add email to user signup.
+ [ ] - Use email for sign-in?
+ [x] - Creditors know their debtors
+ [x] - Debtors know their creditors
+ [x] - Users know their total balance
+ [x] - Creditors know their balance with a debtor
+ [x] - Debtors know their balance with a creditor
+ [x] - Users show in JSON
+ [ ] - Transaction show JSON
+ [x] - Loan show JSON
+ [x] - Add splitting functionality
+ [ ] - Send emails to debtors on transaction creation
+ [x] - User pulldown queries could use some optimization
+ [ ] - ...and maybe a little more
+ [x] - Add Friendships join table so users can keep track of who they split with
+ [x] - Track transaction history for unregistered users
+ [ ] - Link up existing unregistered user data when user signs up (link by email)

Evolve! Become a member of phylum chordata:
+ [ ] - Pass actual userid on kickoff
+ [x] - Collections
    + [ ] - Add listeners
    + [x] - Debts
    + [x] - Credits
    + [x] - Transactions
    + [x] - Friends
+ [x] - Models
    + [x] - User
    + [x] - Transaction
    + [x] - Debt
    + [x] - Credit
    + [x] - Friend
+ [ ] - Views
    + [ ] - Transaction
        + [x] - New
            + [x] - Track total amount and make loans add up
            + [x] - Should this total be tracked in the database for later show requests?
                Yup. Totally nailed it, bro.  
        + [ ] - Item
        + [ ] - Detail
        + [ ] - Index
            Probably doesn't make sense  
    + [ ] - Loan
        + [x] - New
            + [ ] - Move debtor_id and loan amount collection logic to loan view rather than transaction?
                Seems to be working fine; leave it be  
        + [ ] - Item
        + [ ] - Detail
        + [ ] - Index
    + [ ] - Friend
        + [x] - New
        + [ ] - Item
        + [x] - Detail
        + [ ] - Index
+ [ ] - Templates
    + [ ] - Transaction
        + [x] - New
        + [ ] - Item
        + [ ] - Detail
        + [ ] - Index
    + [ ] - Loan
        + [x] - New
        + [ ] - Item
        + [ ] - Detail
        + [ ] - Index
    + [ ] - Friend
        + [x] - New
        + [ ] - Item
        + [x] - Detail
        + [ ] - Index
+ [ ] - Router
+ [ ] - Conquer the world through drag and drop. DRAG AND DROP EVERYWHERE!

Strap up and put boots on the ground!
+ [ ] - This will make more sense after that spinal surgery you need

You're awesome! Start using other people's work for validation, even if you're pretty sure you don't need it.
+ [ ] - Stateside only? LAME! Get some [Open Exchange Rates](https://openexchangerates.org/) in your life.
+ [ ] - People don't want emails telling them to go do something, they want a button so they can click it and have it done for them. Learn you some [PayPal](https://developer.paypal.com/) and get yo invoice on.
+ [ ] - Who remembers emails? Hook up with [Google](https://developers.google.com/) and automate that jazz.
+ [ ] - What if your contacts don't have photos? Get some [Gravatar](https://en.gravatar.com/site/implement/) in your life and spice up those bland circles.


jeff's words: make a `loans` backbone collection. Make collections for `credits` and `debts`. They both `extend` `loans`. `loans` will have a `url` propert pointing to the loans rails controller.  
    Thanks, Jeff! Your words put me back on the True Path.
