---
layout: post
type: post
title:  "Primer to Building Products in a Lean Startup"
date:   2013-04-22 14:33:19
categories: tech
---

Kera laid off all employees recently (<a href="http://techcrunch.com/2013/04/22/kera-shut-down-closes/">out of money</a>). I've worked for <a href="http://ca.linkedin.com/in/taigezhang">several startups</a> but Kera was the one of the few that I worked for that didn't have product-market fit. This meant I learned a lot about finding it. They say you learn more by failing and doing it yourself.

I'd like to share some of those learnings. First, I'll go over the tests used in a lean startup. Second, the AARRR metrics that we tracked. And third, some ideas on how to improve those metrics.
<h3>Testing in Lean Startups</h3>
There are 4 tests that are really useful for a startup.

<ul>
	<li>A/B Tests (comparative): This tells you what works better and by how much. This is really easy to do with <a href="https://www.optimizely.com/">Optimizely</a>. Create variants and then see how they convert.</li>
	<li>Usability Test (qualitative): This tells you <strong>why</strong> things are happening. This is how you <a href="http://www.taigeair.com/how-to-conduct-a-usability-study/">conduct a usability study</a>.</li>
	<li>Funnel Analysis (quantitative): This tells you what you need to work on. It gives you an overview of the journey your visitors go through to become your customers. There are drop offs at each step. Optimise the part that gives the most net results.</li>
	<li>Cohort Analysis (quantitative): This shows how a group of users perform over time. You can segment your users based signup date, feature set, geography, referral source, etc. and see how they retain over time.</li>
</ul>

These testing and measuring methods are very open-ended so it's up to you to determine what tests to use, what to measure, how to set it up, and how to determine success. Cohort analysis is more complicated to set up than the others so I recommend checking out <a href="http://www.ashmaurya.com/2010/07/3-rules-to-actionable-metrics/" target="_blank">Ash's Actionable Metrics</a> and <a href="http://jonathonbalogh.com/2012/03/24/introduction-to-cohort-analysis-for-startups/" target="_blank">Jonathan's Intro to Cohort Analysis</a>. You should also check out this video by <a href="https://mixpanel.com/docs/learn-the-features/segmentation-video" target="_blank">Mixpanel</a>.

<h3>Startup Metrics</h3>

So now you have a number of tests you can use to evaluate your hypothesis, but what do you measure? By far the most renown and adopted set of metrics are <a href="http://500hats.typepad.com/500blogs/2007/09/startup-metrics.html">Dave McClure's AARRR</a> metrics. I think it's because it's catchy, generally true, and can be flexibly applied to any startup. Here are some metrics that I like categorised into acquisition, activation, retention, referral, and revenue.

<strong>Examples of Acquisition Metrics</strong>
<ul>
	<li>Click-through rate (CTR) - this tells you how well something works or is used. For example, the CTR on a call-to-action button or banner.</li>
	<li>Time - this tells you how engaged a user is with that page or element.</li>
	<li>Tasks did - this tells you what users did.</li>
	<li>DAU and MAU - mostly vanity metrics that give a high level overview of how the user acquisition pipeline is doing.</li>
	<li>Entry points - where did the user come from? For example, blog, Quora, social media, press mentions, referral links, emails/newsletters, adwords (SEM), display ads, landing pages, separate apps, organic search (SEO), affiliate marketing, biz dev, print media, inside sales, Tumblr, Soundcloud, Pinterest, Slideshare, Youtube, Vimeo, etc. UTM tracking can be very helpful with tracking this. You can generate a UTM link <a href="http://support.google.com/analytics/answer/1033867?hl=en">here</a>.</li>
	<li>Exit points - what's the last thing users saw before leaving?</li>
	<li>Install/DAU - how quickly are you gaining new signups proportional to your user base?</li>
	<li>Cost per Acquisition (CPA) - how much does it take to get a sign up? Total cost of that channel divided by number of signups within a period.</li>
</ul>

All these metrics can be used to help you determine how successful are you at converting visitors into signups. You should also be able to answer: How many visitors are you getting? Where are visitors coming from? How high quality are different kinds of traffic? Pick 2-5 to focus on at a time.

<strong>Examples of Activation Metrics</strong>

<ul>
	<li>Time - how long do they spend?</li>
	<li>Click-through rate (CTR) - are they engaging with something? Do they see it and click it?</li>
	<li>Tasks did - what did the users do? How many times?</li>
	<li>Goal completion - do they complete the goals given?</li>
	<li>First action - what did they do first?</li>
	<li>Last action - what was the last thing they did before leaving?</li>
</ul>

These metrics (some of which are the same as acquisition ones but interpreted or used differently) can help you understand how good your first time user experience (FTUE) is and if visitors become real users. You can use <a href="http://www.clicktale.com/" target="_blank">ClickTale</a> and <a href="http://www.crazyegg.com/" target="_blank">Crazy Egg</a> to see what users are engaging with on your site (it integrates into Optimizely). You can also do usability testing in person (or outsource it) to see why users aren't activating. Read about <a href="http://www.taigeair.com/how-to-conduct-a-usability-study/" target="_blank">user testing here</a>.

<strong>Examples of Retention Metric</strong>

<ul>
	<li>1-day, 3-day, 7-day, and 30-day retention rates - these report what percentage of your users return within a given period of time.</li>
	<li>Daily revisits - how many times per day users come back to the site given that users come back?</li>
	<li>Median Return Time - median time before users come back.</li>
	<li>Re-marketing Effectiveness - views and CTR for newsletters, notifications (text messages, emails, etc.), RSS, advertising, etc. to get users to re-engage with the app.</li>
</ul>

These are probably the most important metrics because it shows you how useful your application, website or game is to people. An application can be really fun and engaging such as <a href="http://rumpetroll.com/">rumpetroll</a> but if people lose interest quickly and don't return, it's not very sustainable.

<strong>Examples of Referral Metric</strong>
<ul>
	<li>K-factor - (invites sent)*(conversion to signup from invite)</li>
	<li>Invites sent - number of invites sent.</li>
	<li>CTR &amp; CPA - click-through and install conversion rates from various sources, campaigns, and copy.</li>
	<li>Impressions - number of views generated from viral activities such as embed widget, tweets, facebook posts, etc.</li>
	<li>Viral Cycle Time - time it takes to send referral.</li>
</ul>

Some of the best articles on viral marketing I've read are these by David Skok: <a href="http://www.forentrepreneurs.com/the-science-behind-viral-marketing/" target="_blank">The Science behind Viral Marketing</a> and <a href="http://www.forentrepreneurs.com/lessons-learnt-viral-marketing/" target="_blank">Lessons Learnt in Viral Marketing</a>, which talk about two key parameters that drive viral growth, the Viral Coefficient and the Viral Cycle Time.

<strong>Examples of Revenue Metrics</strong>

<ul>
	<li>Life Time Value - (how much you make from the avg. customer)*(how long avg. customer stays with you).</li>
	<li>LTNV - this adds in the value of referral from the customer as well. One way to calculate: 1/(1-kfactor)*(Monthly ARPU)*(User's lifetime)</li>
	<li>ARPU - average revenue per user.</li>
	<li>ARPPU - average revenue per paying user.</li>
	<li>% Paying - percentage of users paying out of total users.</li>
</ul>

<strong>Customer Life Time Value</strong> is like cohort analysis in that it's extremely valuable and a bit complicated. Check out KISSMetric's article on <a href="http://blog.kissmetrics.com/how-to-calculate-lifetime-value/">calculating Customer Life Time Value article</a>. HBS has <a href="http://hbsp.harvard.edu/multimedia/flashtools/cltv/">a CLTV calculator</a>. This Top 10 Social Gaming Metrics presentation is also pretty useful.

<center>
<iframe style="border: 1px solid #CCC; border-width: 1px 1px 0; margin-bottom: 5px;" src="http://www.slideshare.net/slideshow/embed_code/2353273" height="356" width="427" allowfullscreen="" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe></center>

<div style="margin-bottom: 5px;"><strong> <a title="Top 10 Social Gaming Metrics" href="http://www.slideshare.net/jefftee/top-10-social-gaming-metrics-2353273" target="_blank">Top 10 Social Gaming Metrics</a> </strong> from <strong><a href="http://www.slideshare.net/jefftee" target="_blank">jefftee</a></strong></div>

<h3>How do you decide what to test (and build)?</h3>
We usually look at the funnel and see where we can improve that will result in the biggest net effect. What project will give the highest ROI given the objective of the company at this time (i.e. engagement, retention, virality, or monetization)?

Again, let's look at the metrics and think of things we can do to try to improve those metrics:

<strong>Examples of Ways to Improve Acquisition Metrics</strong>

<ul>
	<li>Click-through rate (CTR)
This can be improved by changing the copy, visuals, and placement. Providing more signup options. Adding animation. Lightboxing. Changing the content type (i.e. make it a video or slider or ajax).</li>
	<li>Time
This can be increased by giving the user more things to look at or do, removing elements, changing the visuals, adding video, and changing the copy. It's effective to use A/B testing and track the visitor through your funnel or split-test cohort analysis. <a href="http://techblog.netflix.com/2011/01/how-we-determine-product-success.html">Netflix uses split cohort experiments</a> to determine product success.</li>
	<li>Tasks did
Once you find what actions increase user acquisition or activation you can optimise your website or application to drive that task completion. For example, at Kera we found if someone watched our tutorial, they were more than 3X to sign up. Thus we made it a priority to optimise our site for people to watch the tutorial. One way to boost conversion to that task is remove other clutter and then A/B test copy and visuals.</li>
	<li>DAU &amp; MAU
These are vanity metrics which won't tell you why things are this way or how to improve but still good to track for overall picture.</li>
	<li>Entry points
Entry points are very important. This is split into two categories: marketing and product. I'll talk about product improvements in the viral metrics section. Here, you can work on ways to improve conversion for the largest volume channels and increase traffic for lowest cost channels and best converting channels. You should try lots of user acquisition channels. <a href="http://www.growhack.com/" target="_blank">GrowHack</a> is a good website on the subject and the TreeHouse has a <a href="http://blog.teamtreehouse.com/startup-founders-reveal-their-1-user-acquisition-tactic" target="_blank">good article</a>.</li>
	<li>Exit points
In general, you want people to stay on your site so try to improve parts of your site that have higher than normal exit rates. Why are they leaving from that part of the site? Can you convince them to stay? You can improve the copy, change the visuals, add or remove elements, or maybe even remove that page altogether.</li>
	<li>Install/DAU
Again this depends what you want to do. If you want to increase signups you can do it with marketing and viral features. It's important to monitor retention rate because a dip in retention rate in make it seem like you're getting more virality.</li>
	<li>CPA
You should spend more money and resources on marketing channels that give you the lowest CPA until you see marked diminishing rates of return. However, you should also track this through the funnel to see if those signups convert into paying customers.</li>
</ul>
<strong>Examples of Ways to Improve Activation Metrics</strong>
<ul>
	<li>Time
You may want to increase or decrease the time people spend on your site or application. For example, Google wants you to leave its homepage as fast as possible but wants you to come back. If you're Freshbooks, you want people to create invoices as fast as possible and be done with it. Most sites want to increase this engagement metric because it means your product is interesting, useful, or valuable to people. You can improve this by providing better user experience, reducing website speed, making things easier, etc. In general, you should refine your features so they work really well and are easy to use rather than introducing new ones. If you're a content website, <a href="http://blog.kissmetrics.com/future-of-content-marketing/" target="_blank">make longer higher quality content</a>.</li>
	<li>Click-through rate (CTR)
This can be improved by changing the copy, visuals, and placement. Reducing perceived risks and increasing rewards. Adding animation. Lightboxing. Changing the content type.</li>
	<li>Tasks did
Increase visibility of those tasks, add rewards, reduce perceived risks, content gating, adding it to a to-do list, putting it in a progress meter, prompting the user. <a href="https://qualaroo.com/" target="_blank">Try Qualaroo</a>.</li>
	<li>Goal completion
You can drive goal completion by making the steps linear and preventing users from doing anything else unless they complete the goal. For example, after you sign up for Twitter they make you follow people. There is only the next button which is inactive unless you follow at least 5 people.</li>
	<li>First action
If you're Twitter and you see cohorts with first action being follow someone has a retention rate of 30% compared to first action being change profile picture with retention rate 20%, you should probably introduce follow someone in your onboarding process first. Keep learning from this once you've changed your application to require users to follow someone, what's the next first action that drives retention?</li>
	<li>Last action
Potentially these are places users are getting stuck or confused. Test things you can do to help them get through it or drive them somewhere else before they leave. Keep them busy with more tasks. Improve the user experience. Olark or Qualaroo can likely help.</li>
</ul>

<strong>Examples of Ways to Improve Retention Metric</strong>

<ul>
	<li>1-day, 3-day, 7-day, and 30-day retention rates
For a web application, the advice is make it useful. For a website, it's make it valuable. And for a game, make it fun. There are tactics you can use to get people to come back though. I've brainstormed a few.For example, social games have timers that you set and need to come back around that time to get the reward. Games can have things happen while the player is gone, so when they return there's fun stuff to interact with. Likewise, websites need to update their content so readers come back. Facebook, Twitter, and SoundCloud have streams and feeds which are like information crack. That's why email is so addictive :)

You can make it more social as well. If you have friends who are sending you messages on it and engaging with you, it's harder to stay away. It's a feeling of obligation. Facebook asks old users to welcome new users by writing on their wall to get the ball rolling.</li>

	<li>Daily revisits - I brainstormed some tactics and strategies to boost daily and overall retention. Ideas:
<ol>
	<li>Improve revisits by limiting the amount of things a user can do at once.</li>
	<li>Providing new content over time (i.e. Groupons, new pictures, articles, maps, courses, and videos).</li>
	<li>Having a waiting period (i.e. Google Drive compressing something, asking to come back in 5 minutes).</li>
	<li>Provide interesting or motivational stats and tracking (i.e. Codecademy streaks, 3 wins before unlock next level).</li>
	<li>Social appeal (i.e. see who else is online).</li>
	<li>Social obligations (i.e. don't want to keep my friends waiting for a reply too long).</li>
	<li>Make the user pay up front (i.e. your local gym).</li>
	<li>Increasing switching costs (i.e. helping users accumulate virtual goods, not allowing data export, purchased iOS apps, skills-based: giving out free software for students like AutoDesk).</li>
	<li>Free updates.</li>
	<li>Adding a progress bar and open loops. Read about <a href="http://blog.kissmetrics.com/the-progress-bar/">progress bars</a>.</li>
	<li>Adding random variables on login (i.e. gambling, habit forming technique, <a href="http://www.taigeair.com/tumblrs-new-login-page/">Tumblr's new login page</a>).</li>
	<li>Rewards/gifts given over time (i.e. freebies that require you to come back to use).</li>
	<li>Higher visibility (i.e. toolbars, desktop icons, bookmarks).</li>
	<li>Giving a lot of missions that can not be done in one sitting. (i.e. World of Warcraft).</li>
	<li>New features.</li>
	<li>Time based events (i.e. remember Pokemon? You had to stay up until 9pm to catch a Caterpie. And this <a href="http://boktai.neoseeker.com/wiki/Solar_Sensor">game</a> takes it to a higher level.).</li>
</ol>
</li>
	<li>Median Return Time
Create rewards to come back sooner, insert punishments for being away too long (remember your baby Tamagotchi?), shorten timers and appointments, and increase the pace of the content or game.</li>
	<li>Re-marketing Effectiveness
You can drive existing customers back with advertising, newsletters, notifications, RSS, social media mentions, etc. For example, if you use an iOS device you'll get lots of notification from apps trying to get you to re-engage. Facebook sends you a lot of emails recommending friends for you to add if you're a new Facebook user. Twitter sends you people who are similar to those that you follow. Airbnb sends you text messages about your booking. Tips: Improve copy, have a CTA, and give rewards i.e. sale, coupon, free gift.</li>
</ul>
<strong>Examples of Ways to Improve Referral Metric</strong>
<ul>
	<li>K-factor - Indirect metric of metrics below.</li>
	<li>Invites sent - Ideas below:
<ol>
	<li>Increase touchpoints for referrals.</li>
	<li>Add more ways of referring such as Twitter, Facebook, iMessage, email, Tumblr, etc.</li>
	<li>Give them a tool to invite (i.e. I used Dropbox's tool to email 5000 of my gmail contacts).</li>
	<li>Maybe increase scarcity (i.e. if I only have 10 referral I value it more than if I had unlimited).</li>
	<li>Give rewards for referrals.</li>
	<li>Give examples of who to refer.</li>
	<li>Help them target right people (i.e. Zynga peopel who like games).</li>
	<li>Increase inherent incentive for inviting friends (i.e. more social interaction features with friends).</li>
	<li>Cut down time before inviting.</li>
	<li>If you're a game, you can require someone to help you do something by inviting them, sharing your accomplishments and adding rewards to entice signups. If you're an app, ask users to create teams and share work or projects.</li>
	<li>Make a widget for your product (i.e. Etsy mini).</li>
	<li>Put your logo on stuff (i.e. Freshbook invoices).</li>
	<li>Ask them to include a badge on their site or write about you in return for some value.</li>
</ol>
</li>
	<li>CTR &amp; CPA - Improve copy, visuals, and focus on what works.</li>
	<li>Impressions - Find partners, give incentives, create embeddable widgets, add more platforms.</li>
	<li>Viral Cycle Time - Shorten, simplify, and incentivise.</li>
</ul>

<strong>Examples of Ways to Improve Revenue Metrics</strong>

<ul>
	<li>Customer Life Time Value and LTNV
Increase virality, ARPU, or user life time. Customer life time can be lengthened by good user experience, brand loyalty, new features, new missions, introducing internal economy (i.e. google apps, Eve Online, Amazon Affiliates), create some setbacks, and new content.</li>
	<li>ARPU
Sell more things (i.e. what are people willing to pay for?). Wider range of pricing. Renting. Internal economy (allow users to buy, sell, exchange i.e. apple takes 30% of app revenue.). Adding new revenue streams such as advertising, product placement, and deals (those surveys you know?).</li>
	<li>ARPPU
Try increasing the price until it reaches market price. Careful not to hurt repeat buying by setting the price too high. Introduce luxury goods and features. Sell addons. Even apple sells headphones and cases. There's no shame in it, unless you're like Ryanair. That's just evil.</li>
	<li>% Paying
More touch points for payment. More payment options. Better features or goods worth buying. Increase scarcity i.e. have a limited time deal. Reduce price. Add freebies for purchasing. Incentivise first time buyers. Give away free redeemable coupons (get them familiar with buying process). Ask for payment information up front (i.e. Apple's App Store). Restrict features (i.e. Rdio limits plays per month). Give free a trial and optimise it (i.e. test trial length, features accessible, etc.). Change what's included in packages (i.e. Spotify mobile app only available for paying users).</li>
</ul>
<h3>Conclusion</h3>
That's my comprehensive guide on the metrics that you'll need to know and work with at a lean startup. Feel free to share and distribute this. I'm open to feedback and comments as well.