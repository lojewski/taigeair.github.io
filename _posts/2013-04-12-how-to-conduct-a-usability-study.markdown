---
layout: post
type: post
title:  "How to Conduct a Usability Study"
date:   2013-04-12 14:33:19
categories: tech
---

<em><p>I wrote on the <a href="http://blog.kera.io/" target="_blank">Kera Blog</a> a few days ago about conducting usability studies. It's a very personal and valuable post that I want to keep. It's not good to have duplicate content for Google rankings but it's okay to have some. Furthermore, my personal blog is mostly for myself. Here's the re-post:</p></em>
<p>I've conducted several usability tests for different web applications but it's still time consuming to plan and I always feel like I'm forgetting something. Many people know the importance of doing usability studies but not so many are able to do it well. &nbsp;</p>
<p>Similar to me, many developers, designers, and product managers fell into this UX role and had to learn it themselves.  It’s taken me a while to learn how to conduct effective, valuable user testing so I thought I’d write a guide and checklist for those who don’t do this as their full-time job or just starting out. </p>
<p>Similar to me, many developers, designers, and product managers fell into this UX role and had to learn it themselves. It's taken me a while to learn how to conduct effective, valuable user testing so I thought I'd write a guide and checklist for those who don't do this as their full-time job or just starting out.</p>
<p><strong>Basic Idea of Usability Study</strong></p>
<p>If something isn't performing well, you have to go be a detective and figure out why. That's the essence of doing user testing.&nbsp;</p>
<p>This is something I really enjoy doing because as a product owner, you always want to build the best product possible and there's nothing like watching real people use your product. For my <a href="http://www.wellingtonstravel.com/" target="_blank">maps business</a>, I literally stood in the retail stores and watched how people responded to the product: if they noticed the product, how they responded to it, how they decided whether or not to buy, why they bought it, etc.&nbsp;It's like being a modern-day Sherlock Holmes but less dangerous.</p>
<p>Recently, I performed a usability test for our latest product, <a href="https://www.kera.io/">the Get Started Widget</a> and will use examples from it.&nbsp;</p>
<p><strong>Reasons to do a Usability Test</strong></p>
<p>The main benefits of doing web usability testing are</p>
<ul class="bullets">
<li>You get unfiltered and high bandwidth feedback</li>
<li>You can see how users think and points of confusion</li>
<li>You get to figure out the why</li>
<li>You feel like Sherlock Holmes</li>
</ul>
<p>Usability testing is a qualitative method of research which is much better suited for answering question about why or how to fix a problem. Quantitative methods such as A/B testing do a much better job answering how many and how much questions. <a href="http://www.nngroup.com/articles/which-ux-research-methods/" target="_blank">Nielsen Norman Group</a> has a great article on which user experience research methods to use.&nbsp;</p>
<p>Aside: If your company has a support team, the team lead should be involved with user experience in general because those people really understand the pain of the customer and can often provide ideas and suggestions to vastly improve the product.&nbsp;</p>
<p>For example, at <a href="http://www.wimdu.com/" target="_blank">Wimdu</a> we were missing out on signups because of our Facebook Connect design. We didn't know this but we confused some users into thinking we required Facebook in order to sign up. People actually called in to try to figure out how to sign up without Facebook. We fixed this with by adding a horizontal rule with the word "or" between the sign up methods. That ceased those types of support calls.</p>
<h3>Step 1. Planning (1-3 hours)</h3>
<p><strong>Have an objective(s).</strong> Why are you doing this study? What questions do you want answered?</p>
<blockquote>
<p>Kera Example<br /></p>
<p>Study Objective 1: Do people know what what they're signing up for?</p>
<p>Study Objective 2: Why are people not embedding?</p>
<p>Study Objective 3: How easy is it for users to use our application?</p>
</blockquote>
<p><strong>Decide on goals for the user to accomplish.</strong> What would success look like?</p>
<blockquote>
<p>Kera Example</p>
<p>Goal: User creates a mission and embeds widget on his or her site.</p>
</blockquote>
<p><strong>Have hypotheses</strong>&nbsp;(optional). Although it is recommend to have one, I have often been really successful without one especially early on. Sometimes product challenges are so difficult, you need to do research just to get a hunch. In this case, keep an open mind and just watch users and take in what is happening without any bias to prove or disprove.&nbsp;</p>
<p>Alternatively,&nbsp;you may want to conduct a&nbsp;<a href="http://www.usability.gov/methods/test_refine/heuristic.html" target="_blank">heuristic evaluation</a>, a review by a usability expert of your UI against accepted heuristics,&nbsp;to generate some&nbsp;hypotheses. This can also help you create appropriate tests and prototypes for the next step. See also: Tips on&nbsp;<a href="http://www.usabilityfirst.com/usability-methods/heuristic-evaluation/" target="_blank">doing it yourself</a>&nbsp;and a&nbsp;<a href="http://uxmag.com/articles/what-you-really-get-from-a-heuristic-evaluation" target="_blank">primer</a>.&nbsp;<br /></p>
<blockquote>
<p>Kera Example</p>
<p>Hypothesis &nbsp;1: People don't understand how to use the application.&nbsp;</p>
<p>Hypothesis &nbsp;2: It's not friendly to marketers.</p>
</blockquote>
<p><strong>Choose a location.</strong> This should be as close to the environment of the actual user as possible.</p>
<blockquote>
<p>Kera Example</p>
<p>Location: Office environment, on users' own computers.</p>
</blockquote>
<p><strong>Make a list of questions you want to ask.</strong> These include interview questions you might want to ask, prompts for follow-up questions, as well as post-experiment questions that you want to ask each participant.&nbsp;</p>
<blockquote>
<p>Screening Questions:<br />What's age? What do you do? Have you ever embedded a YouTube video?</p>
<p>Experiment Questions:<br />
Did you understand you'd be getting a widget for your website?</p>
<p>What do you think we do?</p>
<p>How would you describe us to your friends?</p>
</blockquote>
<p>You can also try to understand what is going through the user's head by asking them questions as they are using the application. See "asking question to get the why" in Step 3.&nbsp;</p>
<p><strong>A usability test plan template.&nbsp;</strong>Here's a <a href="http://www.scribd.com/doc/132547427/Chapter-05-Test-Plans-and-Designs" target="_blank">template</a> that can help you plan your study.</p>
<h3>Step 2. Setting Up the Study. (1-6 hours)</h3>
<p><strong>Get the prototype or test environment ready.&nbsp;</strong>Create and ready the materials you need for the study. For example, do you need build anything, create mockups, set up a test or local environment, disable A/B testing, etc.?</p>
<p>You may want to <a href="http://books.google.ca/books?id=4lge5k_F9EwC&amp;pg=PA264&amp;lpg=PA264&amp;dq=usability+testing+pilot&amp;source=bl&amp;ots=vpib5IjaBK&amp;sig=XBE73H8l7kuONHPX0uLO1FaxmQY&amp;hl=en&amp;sa=X&amp;ei=HZpdUaXiLsrArQHPooGwCA&amp;redir_esc=y#v=onepage&amp;q=usability%20testing%20pilot&amp;f=false" target="_blank">pilot test</a> the study to help you identify gaps in your experiment or test setup.</p>
<p><strong>Prepare a way to record the study.</strong>&nbsp;Recording the user is best because you may want to reference it again if you missed anything and it allows you to administer the test better since you're not focused on taking notes. (And I'm pretty sure all good spies use recording equipment.) If you're not recording, figure out how to take good notes. If you're collecting quantitive data, prepare a form or table to help you quickly take notes and stay organised.</p>
<p><strong>Get the people.&nbsp;</strong>Ideally you'll have a pool of candidates to ask to come in for a usability study. I suggest putting up posters offering cash for participation around offices, incubators, and universities. And online on craigslist, etc.</p>
<p>If you don't have a pool to select from, you can try&nbsp;finding participants on the spot at cafes, offices, universities, meetup groups, and <a href="http://en.wikipedia.org/wiki/Usability_testing#Hallway_testing" target="_blank">hallways</a>.&nbsp;</p>
<p>You should pick a few types of people for your user groups because it's interesting to see how different groups respond but if you're testing for general usability, random people with normal intelligence are just as effective. I'd recommend <a href="http://en.wikipedia.org/wiki/Usability_testing#How_many_users_to_test.3F" target="_blank">4-8 participants</a>. Since our product is for web users, we wanted to get people who are internet savvy. We put people in 3 groups: business/marketing, engineering, and general.</p>
<p><strong>A usability study checklist.</strong> Here's a <a href="http://www.scribd.com/doc/132504143/Web-Usability-Test-Checklists" target="_blank">checklist</a> to help you prepare for conducting a web usability test by <a href="http://www.amazon.com/gp/product/0321657292?ie=UTF8&amp;camp=213733&amp;creative=393185&amp;creativeASIN=0321657292&amp;linkCode=shr&amp;tag=torontot-20" target="_blank">Steve Krug's Rocket Surgery Made Easy</a>&nbsp;book.</p>
<h3>Step 3. Executing the User Research Study. (1-4 hours)</h3>
<p><strong>Greeting the participant.</strong> You should brief the users in a standardised way that allows you to understand them and helps them give you the best feedback possible. A sample script:</p>
<blockquote>
<p>Kera Example</p>
<p>Intro to Usability Study:</p>
<p>Have you done a usability study before? (yes/no) Great, just to give you an idea of how this works. We'll be asking you to take a look at our website and asking you some questions. Then we'll get you to try our application to perform some tasks. It should take about 25 minutes in total. We're going to be testing the web application to see if it is understandable and usable. We're not testing you. There are no right or wrong answers.</p>
<p>Intro to Marketing Site Analysis:</p>
<p>Say a friend has sent you a link to this site. I'm going to give you a few moments to look at the site and then ask you what it's about. Look around the site as you would normally. This is yours&ndash; go ahead. (Open the site/test environment and give them the laptop or mouse/keyboard.)&nbsp;</p>
<p>Intro to Task Completion:&nbsp;</p>
<p>Now we're going to ask you to use our application. (After finding out participant was a history major). I'm going to give you a <strong>scenario</strong>. Let's say you're a project manager for a museum's website that has users. You want your users to be more engaged and active so someone has&nbsp;recommended that you take a look at this site. You have developer resources but you're going to take a look first and evaluate it because you're responsible for this project.</p>
</blockquote>
<p>I highly recommend watching this short video on how to run in-person experiments on <a href="https://class.coursera.org/hci/lecture/36" target="_blank">Stanford's HCI course</a>&nbsp;(<a href="http://www.scribd.com/doc/134040586/Slides-PDF-HCI-10-1-RunningLabExperiments" target="_blank">slides</a>) and this <a href="http://www.youtube.com/watch?v=QckIzHC99Xc" target="_blank">Zipcar usability test example</a>. If the videos are no longer available you can still find them in my shared <a href="https://www.box.com/taigeair-usability-toolkit" target="_blank">Usability Toolkit folder</a> on Box below.</p>
<p>Lastly, collect information on the participant and get them to fill out any paperwork if necessary (i.e. contact info, demographic data, consent, NDA, etc.). Many templates are in the Usability Toolkit folder at the end.</p>
<p><strong>Observing and taking notes.</strong>&nbsp;Observing the user is one of the main benefits of in-person experiments.&nbsp;Watch users as they attempt to perform tasks with the user interface.&nbsp;Collect quantitive data on task completion. Record interesting findings. Log points of confusion. Steps users took to complete a task or to explore/navigate your website. Note what users were looking at and what they ignored. What users say and ask.</p>
<blockquote>
<p>Kera Example</p>
<p>Some notes I made:&nbsp;</p>
<p>- she clicked on 'get started' button because she wanted to get more info; not interested in pricing yet</p>
<p>- visuals were the main thing she looked at; headlines second; text copy was ignored</p>
<p>- visuals did not communicate to user what our product was. it was confusing&nbsp;</p>
<p>- welcome message&ndash; user ignored it<br /></p>
<p>- get started icon&ndash; she was not interested in clicking it and didn't know what it was &nbsp;</p>
<p>- user did not click on it was because didn't know what it was</p>
</blockquote>
<p><strong>Asking questions to get the why.</strong> There are&nbsp;many questions you can ask during the study to understand why users are doing certain things, why they did something, what mental models they have, and what they were guessing or attempting to do.&nbsp;Some questions I ask are:</p>
<blockquote>
<p>Kera Example</p>
<p>Can you describe what is happening?</p>
<p>How would you go about doing [something]? Take a guess.</p>
<p>What do you want to click on now?</p>
<p>What do you want to know now?</p>
<p>Why did you do that?</p>
<p>What are you thinking?</p>
<p>What do you think this is? (point to a UI element).</p>
<p>Is there anything you're confused about or that stands out to you?</p>
</blockquote>
<p>People don't always tell Sherlock Holmes the truth. As&nbsp;<a href="http://www.nngroup.com/articles/first-rule-of-usability-dont-listen-to-users/" target="_blank">NN Group</a>&nbsp;explains self-reporting can be skewed because often&nbsp;users tell you what they think you want to hear, what they remember, and rationalise.You should use your judgement on what's really happening based on your&nbsp;observations&nbsp;and use questions as another source in your&nbsp;investigation.</p>
<p><strong>Asking the user to talk aloud.</strong>&nbsp;The think aloud protocol is an effective method to understand what is going through a user's mind. It's similar to asking questions to get to why but here the user is talking aloud as he or she is performing the task uninterrupted. You'd need to teach the user how to think aloud first. I usually say something like this:</p>
<blockquote>
<p>As you&rsquo;re doing the task, I want you to say aloud whatever you are thinking. For example, if I am thinking aloud (take a pen), I&rsquo;d say: I see this pen. It has a blue cap so I assume the ink will be blue. It looks like I can just pull it off so I&rsquo;ll try to pull it. Great, it worked.&nbsp;</p>
</blockquote>
<p>Or see 8:25 of the <a href="https://class.coursera.org/hci/lecture/36" target="_blank">in-person experiment video</a> to see a Stanford professor do it.</p>
<p>Often this is hard for a user so you'd need to revert back to prompting the user or asking questions to get the why. Remember: participants who think aloud will be slower at performing tasks and may behave differently.</p>
<p><strong>Debrief the participant.</strong>&nbsp;This is the time when you can 1. inform them about the purpose of study if you couldn't before 2. get them fill out paper survey&nbsp;questionnaires&nbsp;and 3. get them to sign a receipt&nbsp;of remuneration.</p>
<h3>Step 4. Summarising and Presenting Findings. (2-5 hours)</h3>
<p><strong>Refining notes.</strong> Right after each participant, take the time to write down all your observations and particularities while they are still fresh in your mind. Quickly check the notes you made during the study to see if they can be understood later on and convert to long-form if necessary.</p>
<p><strong>Aggregate findings and performing&nbsp;calculations.&nbsp;</strong>You'll get an idea of the most critical discoveries which will drive your report. Compile all the&nbsp;qualitative&nbsp;findings into main&nbsp;takeaways,&nbsp;citing numbers or percentages to indicate importance. Do the same&nbsp;with&nbsp;quantitive data. Perform&nbsp;calculations&nbsp;as need. Here's a <a href="http://www.measuringusability.com/calc.php" target="_blank">website</a> with many useful&nbsp;calculators for usability testing.&nbsp;&nbsp;</p>
<p><strong>Reporting findings</strong>. Summarise the goal, participant characteristics, results, and recommendations. The report depends on the scale of the project and your audience. If it's a small study for your startup, it can be relatively informal. If it's for a client, you might need to package your presentation accordingly. Here are <a href="http://jcflowers1.iweb.bsu.edu/rlo/reportingusability.htm" target="_blank">some tips</a>.</p>
<p><strong>Presenting.</strong>&nbsp;It's great to give a presentation to the team in person so you can be sure you're communicating the findings effectively. You can also take this time to answer questions, discuss the implications, and brainstorm improvements or follow-on studies together.&nbsp;</p>
<p>Final Thoughts</p>
<p>You might want to outsource this. While I enjoy doing it in-house and being close to users, there are definitely companies that specialise in UX and conduct great usability&nbsp;tests. A couple relatively cheap and easy to use ones are <a href="https://www.youeye.com/" target="_blank">YouEye</a> and&nbsp;<a href="http://www.usertesting.com/" target="_blank">usertesting.com</a></p>
<p>To me, data without reason is just noise. For example, if there is correlation between flu outbreaks and iPhone releases, would you trade on it? Probably not because there is no underlying rationale. There are many dangers to basing decisions on just data such as <a href="http://en.wikipedia.org/wiki/P-value" target="_blank">randomness</a>,&nbsp;<a href="http://en.wikipedia.org/wiki/Data_dredging" target="_blank">data&nbsp;dredging</a>,&nbsp;confounding variables, correlation vs. causation,&nbsp;<a href="http://en.wikipedia.org/wiki/Simpson's_paradox" target="_blank">Simpson's Paradox</a>, <a href="http://wwwis.win.tue.nl/~tcalders/slides/studium_generale.pdf" target="_blank">false discoveries</a>, etc.</p>
<p>I'd recommend using both A/B testing and usability studies to give you both strong data but also help you uncover the reasons for why things are happening.&nbsp;Usability studies and talking to your users is the best way to confirm or disprove your reasoning.</p>
<p>Books and other excellent sources that helped me</p>
<p><strong>Checklists for your usability study.</strong>&nbsp;Get it <a href="http://www.scribd.com/doc/132504143/Web-Usability-Test-Checklists-Don-t-Make-Me-Think-by-Steve-Krug" target="_blank">here</a>.</p>
<p><strong>Template for planning usability study.</strong> Get it <a href="http://www.scribd.com/doc/132547427/Chapter-05-Test-Plans-and-Designs" target="_blank">here</a>.&nbsp;More templates on <a href="http://www.usability.gov/templates/">usability.gov</a></p>
<p><strong>Example of an expert conducting a usability study for Zipcar.</strong> See it on <a href="http://www.youtube.com/watch?v=QckIzHC99Xc">YouTube</a>.</p>

<div class="video-wrapper"><iframe frameborder="0" src="http://www.youtube.com/embed/QckIzHC99Xc"></iframe></div>

<p><strong>Example of usability study process for Boxee.</strong> Read the article <a href="http://uxmag.com/articles/the-ux-design-process-for-the-boxee-beta" target="_blank">here</a>.&nbsp;</p>

<p><strong>UX Books, classes, people and more.</strong></p>

<blockquote>

<p>This is a&nbsp;prerequisite for starting out in user experience.&nbsp;<a href="http://www.amazon.com/gp/product/0465067107?ie=UTF8&amp;camp=213733&amp;creative=393185&amp;creativeASIN=0465067107&amp;linkCode=shr&amp;tag=torontot-20" target="_blank">The Design of Everyday Things</a> by Donald A. Norman.&nbsp;Here's a <a href="http://www.usabilitypost.com/2010/11/17/the-design-of-everyday-things/" target="_blank">nice review</a>.&nbsp;</p>
<p>This is the most respected web usability guide. <a href="http://www.amazon.com/gp/product/0321344758?ie=UTF8&amp;camp=213733&amp;creative=393185&amp;creativeASIN=0321344758&amp;linkCode=shr&amp;tag=torontot-20" target="_blank">Don't Make Me Think: A Common Sense Approach to Web Usability</a>&nbsp;by Steve Krug.</p>
<p><a href="http://alistapart.com/article/usability-testing-demystified" target="_blank">Usability Testing Demystified</a> by Dana Chisnell. She also has several great articles on <a href="http://uxmag.com/articles/beyond-task-completion-flow-in-design" target="_blank">UX Magazine</a> and <a href="http://www.usabilityworks.net/" target="_blank">her website</a>.</p>
<p><a href="https://www.coursera.org/course/hci" target="_blank">Human-Computer Interaction Course</a> (Stanford + Coursera.org)</p>
<p><a href="http://hackdesign.org/" target="_blank">Hack Design</a>. An easy to follow design course for hackers who do amazing things.<br /></p>
<p>Handbook of Usability Testing: How to Plan, Design, and Conduct Effective Tests, 2nd Edition (<a href="http://ca.wiley.com/WileyCDA/WileyTitle/productCd-0470185481,descCd-DOWNLOAD.html" target="_blank">Downloadable sample eBook</a>&nbsp;or on <a href="http://www.amazon.com/gp/product/0470185481?ie=UTF8&amp;camp=213733&amp;creative=393185&amp;creativeASIN=0470185481&amp;linkCode=shr&amp;tag=torontot-20" target="_blank">Amazon</a>)&nbsp;by Jeffrey Rubin and Dana Chisnell</p>
<p><a href="https://twitter.com/whitneyhess" target="_blank">Whitney Hess</a> is a UX designer who has really gone out of her way to help aspiring UX designers and people interested in this field like me. Some good ones:&nbsp;<a href="http://whitneyhess.com/blog/2009/06/30/so-you-wanna-be-a-user-experience-designer-step-1-resources/" target="_blank">So you want to be a user experience designer</a>,&nbsp;<a href="http://whitneyhess.com/blog/2011/04/23/youre-not-a-user-experience-designer-if/" target="_blank">You're not a user experience designer if</a>,&nbsp;<a href="http://whitneyhess.com/resources/" target="_blank">Whitney Hess's recommend UX resources</a>, and&nbsp;<a href="https://twitter.com/whitneyhess/uxers" target="_blank">UXers Twitter List</a>.</p>
<p>This is my Usability Toolkit shared folder where I keep a lot of my resources for user experience design.&nbsp;Say hi and <a href="http://twitter.com/taigeair" target="_blank">get in touch over Twitter</a> if you want to be a collaborator.</p>
</blockquote>
<div class="video-wrapper"><iframe frameborder="0" src="https://www.box.com/embed_widget/aee37e77d505/s/hyvbz37wzk3x70idcugr?view=list&amp;sort=name&amp;direction=ASC&amp;theme=blue"></iframe>
</div>

<p>---</p>
<p>Taige Zhang is a Product Marketer at Kera. You can follow him on Twitter&nbsp;<a href="https://twitter.com/taigeair" target="_blank">@taigeair</a>.&nbsp;</p>