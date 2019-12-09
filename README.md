***  How To Run  ***
  This app is built with a Ruby/Rails backend and a React frontend. It may be a bit overkill but its what I know and have to work with. That being said you will need to run both the Rails and React servers.

  Rails Setup
  • In the root of the application you will need to:
    • run a `rails db:create` (create the rails db - it doesn't use a db but it prevents an error)
    • run `rails s -p 3001`. (starts Rails server)

  React Setup
  • cd into the client folder:
    • run `npm install` or `yarn` (creates the package.json file with all js dependencies)
    • run `npm start` or `yarn start`. (starts webpack server)

  One the app is running go to `http://localhost:3000` and you will be greeted with the UI. From here you can click the box or drag and drop the csv file. Right now you can only drop in one file at a time but ideally you could upload multiple CSV files and they would generate one report. 

  The actual json files will appear in the `public/` folder of the rails application.



***  Overview of Tech  ***
  As mentioned above I built a small API only Rails app and a small React frontend. I wasn't sure if the rails app was too much or not but I had a hard time thinking about setting it up without and eventually decided to just start on the challenge the way I know how. 



***  Challenges  ***
  One of the biggest challenges I had was two needy cats that made it hard to work. I wanted to follow the instructions and not spend too much time on it. I probably spent around 5 solid hours working on it and believe I could have finished if I had more time.

  Here are some of the challenges that I faced:

    • Having not worked with CSVs too much I spent a good amount of time Googling ways to interact with them. I think a good chunk of the time was figuring out how to traverse all of the rows and then to build the updated CSV file. I used a ton of binding.prys to play with the CSV data and see what I had access to. I used Google anytime I was stuck and not sure where to go. 

    • It took me a few minutes to figure out how to convert the updated CSV object to a JSON object but as it turns out I was overcomplicating it :D once I realized that I figured out how to do it pretty quickly.

    • I figured out how to format the phone numbers in an easy way using the NumberHelper class. But even though it worked pretty quickly, the format was broken if the phone number had an additional 1 before the area code. It doesn't seem like the best way to do it but I just checked to see if the phone number had 11 characters and if so I removed the first number. It works just fine assuming the phone numbers don't exceed 11 characters.

    • I will admit that a lot of this stuff was pretty new to me. A lot of the solutions were found looking online but I do think that demonstrates that even though I didn't know how to do some of it, that didn't stop me from being resourceful and find some assistance online. 



***  Next Steps  ***
  The next task to complete was to validate the license number. I started the task by removing the row if there wasn't a license number. Eventually I would:
    • Create a new CSV object with the exact same headers and add the removed record to it. (report removed records)

    • I began looking into how I would go about checking to see if the license number was valid. I found an online article that talked about the Luhn algorithm and I assume I would have started there. I could have tried to figure it out myself but that algorithm seems pretty sweet. 

    • I would have created a new json file with the same name as the report but probably would have appended removed to it to differentiate. 

    • I also would have returned the two json objects to my React app and displayed them in the browser. I thought about creating a table that listed the records and have a button that would toggle between the validated records and non validated records.

    • I would have attempted to write some tests. I will admit testing is one of my weak points and if I had more time I would have attempted to write some. My thought process came down to this: 
      - write some tests.
        • Pros: shows I tried to do something I am not strong at
        • Cons: write bad tests
      - create a React frontend
        • Pros: show off something I really enjoy doing and am passionate about
        • Cons: Spent time doing that instead of test
    Even though the React code isn't too complicated I chose to capitalize on my strengths in this instance.

    • Enhancing the program to handle duplicates was one I didn't spend too much time thinking about. I thought of some ways of checking where I would record license numbers and check to see if that number exists in future rows. I feel like I could get that working just fine but I am not sure how fast it would be on a larger CSV file (like the 10k sample)



***  Feedback  ***
  I really enjoyed working on this challenge. It really pushed me to work with things I wasn't familiar with and I learned a lot in the process. I will probably continue to work through the challenges because I want to see if I can solve them. I really do enjoy solving problems and would love to get some insight to see how I did and what could have been done better. 

  My only feedback or question was the bullet point about having a command line interface to process the CSV file. A couple of bullet points below it mentioned having a UI for the user to interact with as well. I didn't see a need for a CLI if I had a UI in the browser. Maybe I just misunderstood that point. 
