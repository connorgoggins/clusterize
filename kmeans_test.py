from sklearn.feature_extraction import text
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.cluster import KMeans
from sklearn.metrics import adjusted_rand_score
from nltk.stem.porter import *
import string
import sys
import numpy as np

documents = [
" I learned that I should have started with this more scalable fix, anticipating that I'd have to add so many other ad slots, instead of just copying and pasting some code at the beginning.",
" From this, I learned to always backup and track my code changes even if it is a small personal project.",
" I learned that you should never be too invested in anything until you get to experience it first hand and there is no shame in following your heart.",
" After that, I learnt two things: firstly, always keep a backup, no matter how small the modification is, because nobody wants to do a same thing for two times; secondly, delete all the trash in time. Never mess the useful documents with the trash. I so seldom organized my files that there is always limited storage on my disk, and this eventually led to the failure of that system update. After that mistake, the management of files is the last thing I do before I go to sleep every day.",
" From this I learned that I should double check sources and not always take things at face value.",
" I have learned to be more suspicious when I feel too good (that is, elitist) for something unfamiliar.",
" I, once again, learned not to make assumptions about ANYTHING.",
" I caught an elbow to the nose and learned to 'look before you leap.'",
" I learned to first calm down, think, and then try to calm the other person down to diffuse the situation.",
" Until I made a mistake in the public, I noticed that I was wrong. From then on, I would not believe in something that I think it is. I would verify the answer I got and make sure I am right before I tell somebody about it.",
" Thankfully I made the decision to drop premed-- from this experience I learned that commitment is the first step to success-- by leaving too many options open, I was ultimately shooting myself in the foot by initially doing not-so-well in both areas since they are so disparate.",
" I learnt that I had to choose and prioritise in order to give each task sufficient time and dedication. Now, I am able to dedicate myself fully to each class I take or each activity I participate in.",
" I learned that failure is multidimensional, and a process towards success.",
" I should probably learn how to detach from negative experiences and move on instead of being bogged down in shame.",
" I guess what I had learned from my wrongs is enthusiasm towards CS and never give up.",
",What I learned:",
"Do not assume there are tutorials online for everything.",
"Don't give up if there isn't one. Always explore the official docs or even the source, there might be chance.",
" The experience made me realize that regardless of how well I manage my time, I would still have a limited number of things that I could commit to and do well in. So, from the experience, I took the lesson to think about what I care about most deeply first and to prioritize based on that. So, for instance, I know that I care about both women in technology and reading. But, I care more about making a difference in the former so I decided to stay on the board of CU Women in Computer Science and not pursue a board position at Barnard Bookworms, Barnard's reading club.",
" Communication and a greater attention to detail were two key concepts I learned from this.",
" I learned that if I had communicated my roadblocks more quickly to my superiors, I would have reached my goal sooner.",
" Deferring to my groupmates that I assumed had done group projects before, I eventually learned that it is important to step up and communicate, especially when I'm not sure of what's going on.",
" The customers would understand abnormal conditions for delays and they already factor them in for their go-lives. I'm now a staunch believer that honestly is indeed the best policy.",
" I was upset but at the same time glad that I learned a lot from the failed interviews, of how to communicate better and the importance of analyzing and solving technical problems faster. I will prepare myself better and try again next year!",
" Through this experience I learned not only further front-end development tools, but also to ask for help and guidance from managers when needed.",
" However, in making mistakes and receiving constant feedback from my boss, I was able to refine my design and learn how to write scalable and maintainable react code, resulting in a great product and experience in the end.",
" In this case, I realized it was my fault for not emphasizing to all the instructors the importance of proper communication with parents/students. I also had not made sure to clarify this specifically to the newer instructor most likely because I was accustomed to assuming that all the instructors knew the routines/guidelines/policies of their job. Additionally, I should make sure that I myself know of any complaints/requests made by parents because they are paying in order for the students to show improved academic performance in school. I made sure to communicate with the parent properly to amend and resolve the situation.",
" I now realize the importance of open communication, because although they did no work, I was partially at fault for not talking with them sooner about the issue. If I had spoken up sooner about the issue, the work may have been more fairly divided.",
",More than anything else, I learned how the hard thing about hard things is putting forward the intellectual honesty and courage to stay with the hard stuff, how to not take my learning for granted, and that if all else fails, 'And then a miracle happens' is the kind of absurd hand-waving that just might net a few pity points on an exam. (I am joking about that last part: You will never see that kind of half-assed answer from me in class.)",
" However, I quickly learned that not every concept will be clear to me at its first instance, and that's okay. Now, I'm not afraid to be fearless and ask for help and working together in study groups.  It's okay not to know everything by yourself. There are many resources that I can turn to and over my semesters here I have had the privilege to use them.",
" Throughout college, I've continued to create music, and this hobby, along with figuring what I like in Computer Science, made me realize I want to explore creating digital media content for users.",
" Generally, we are making mistakes every day and I am glad that I always learn something by fixing it.",
" I learned to take a step back, and take into account want I really want, and not what is assumed of me.",
" From this experience, I learned that thinking of creative ways of using the right digital tools allows for much more reflexible solutions to many problems.",
" I lost a large portion of the points and my overall grade noticeably dropped. Although this was a painful experience, it taught me about the importance of attention to detail, double-checking work, coming to terms with mistakes, and resilience.",
" I learned that sometimes we can benefit from different views and learn from them.",
" I learned about having more back-up plans and to understand the professor's perspectives, and to take into account that there are so many people in the world who want so many things that are so similar to things that I want. More practically, I gained experience in emailing professors emails courteously. After the experience, I have begun to explore more options, considered other courses and ways to spend my time here at Columbia, and started to appreciate and make do with what I have.",
" From this, I learned to be less cynical to new approaches to problems that I had not previously considered and to extend the benefit of the doubt when I am unsure about something.",
" If after that process I still think I am right, I have learned that it is more productive to compromise than try to win an argument.",
" Through it, I learned that it's really important to get to know people well, how they think and why they interact with the world around them a certain way, before I make action/design choices.",
" We all took away different nuanced memories from that night, but I learned that I should always be cognizant of people's inputs, because I just might be wrong - and it's okay to admit that.",
" I learned not to assume things about others without actually experiencing concrete information or responses . And that even if someone has a negative response they may be open to a conversation about how that impacts you. I think this is very important in Trump's America .",
" Through this experience, I learned that empathy and 'imagining yourself in someone else's shoes' are crucial skills for any kind of project aimed at a specific target audience.",
" I learned that even though I am one of the more experienced students employed there, my assumptions and instincts can't always be trusted, so asking for help from a coworker or supervisor is often a good precaution.",
" I also learned, more generally, that I should be less stubborn. :)",
" I didn't necessarily understand the complicated technical details behind the platform and hence learned to be more humble and learn from other people in my work environment.",
"Sometimes I don't quite understand or misunderstand the assignment, and start working on it. After I try something I think relevant, I became familiar with the environment and the project and then I get on the right track. I think the important thing when unsure about something is to talk to somebody who's also working on it. It is okay to start trying some small things but working on something big that turns out not useful is often time consuming.",
" I also realized that this applies to CS - there is no one right way to do things so it's best to keep an open mind.",
" We ended up in class together where I quickly discovered how mistaken I was about this person. I could've very easily never gave myself the opportunity to make this friendship because of making passing quick judgements so now I do my best to have an open mind when I meet new people and give myself time to get to know the person.",
" If it were not for overcoming this obstacle, I would not have discovered the importance of being sensitive and observant to the people and world around me as a student studying HCI.",
"  But even with a beginning like that we ended up with good grades, as well as a final product that integrates our mutual interest in gaming and the database knowledge we learnt.  I also turned out to enjoy the novel experience working with people with less technical backgrounds, as they tend to look at things from a different perspective and are creative in a new way.",
" In reality, I should have learned to read between the lines, to see that whatever was causing her shortcomings as a writer, I could have seen things from her perspective and provided tangible help.",
", I learned that you shouldn't be embarrassed or afraid of asking for help: I was there to learn from the other developers, but came in with the mindset that I needed to be able to do everything on my own with no assistance.",
" Overall, I learned that sometimes its best to take the risk and to hear out other people and take a decision without looking back. Taking risks and having things not go as planned isn't a bad thing after all.",
" I learned then and there that I am by no means the average user and that it's important to actually speak to the people you're building things for",
"  Additionally, I learned that interaction and collaboration between people in seemingly unrelated fields can foster borrowing and combining methods in different fields and lead to new areas of interdisciplinary research.",
" I enjoy learning from every experience--whether I'm right or wrong-- but I believe the key to learning something new is recognizing when you need help, and I'm practicing that a bit more each day.",
" I learned that I should care for her more and had a better way of dealing with argument other than not talking and breaking both our hearts.",
" It is better to change your mind, change course and keep on, than going the wrong way and never stopping to see where you are going.",
" I realized I needed to change course instead of staying in an industry that wasn't fulfilling me.",
" I learned that it would never be late if you want to have a change.",
"I spent an entire summer at a soul-crushing job at Amazon working in Finance because I thought it would be worth the money even though I'm not interested in Finance at all (also thought I could get a foot in the door with the software engineering departments there)",
",I learned the importance of taking your own happiness in consideration before making long-term decisions that might benefit you in the future",
" This rude awakening firmly instilled in me a number of lessons: to treat time as a limited resource, to know my own limits, and most importantly, to be humble in my path to learning. Ultimately, in life, no resource is infinite, and careful thought and self-control are an imperative for personal growth.",
" What I learned from the ordeal was to not prematurely judge or assess situations; not only are supposedly catastrophic outcomes rarely so catastrophic, they can in fact be quite the opposite.",
" I believe the experience was very humbling, and recalling my mistake still hurts several years later - which makes me believe I have learned something from it.",
" Regardless of where the information comes from, if I am using it, I must understand it at its source.",
" I learned not to assume without concrete information.",
"  So, lessons learned: 1. routinely trying to explain things to myself or other people to poke wholes in what I know 2. starting from first principles as often as I can",
" While emotion is important, i've learned that opinions are weak without data to support them.",
" I learned that I need to really understand something in order to memorize it better. I was not very clear why that algorithm was O(n), but just memorized it. That won't happen to me any more.",
" I learnt from it that we first need to know who are our targets and their needs.",
" I learned that I have no chance before a girl who prioritizes academics over all other things in life.",
" The lesson I learnt is never to neglect details.",
" I hope this understanding will positively shape my ventures in the future.",
" Long story short: I didn't realize how behind I was with tech experience and wasn't aware of the amazing talent around me, but took up the challenge and utilized the resources at my disposal to improve and learn.",
" I learned that it's important to swallow your pride and ask for help, even when you don't want to, because it can go a long way and make what could be a difficult task much easier than expected in the end.",
" From this experience, I learned that while gut-feeling is important, it's also important to pay attention to what people with more experience and knowledge may advice.",
" Finally, I noticed that sometimes inspiration is needed and it usually comes from other parts of our life.",
" People change, and those around you affect who you become, the tendencies you acquire, and the standards you hold. I have to surround myself with people who I believe to push me, people who hold me to a standard I struggle to meet, but who inspire me to attain that level of quality in my own person.",
"During my PM internship last summer, I thought I had a solid understanding of our customer base and what needed to be communicated to our UX designers to meet those needs. Feedback from my manager said otherwise, and I had to pivot. However, along the way, I gained valuable insight into the aspects that I had neglected to inspect before proposing the spec.",
" That it a lesson I learnt from it.",
" But it turns out that you can take something imperfect and still find ways in which it is valid and useful without ignoring or hiding it's problems.",
"  From these kind of experiences, I have learned the importance of having a clear plan in mind before approaching a problem and also executing it in an organized way.",
" And I found that I need to do better in my time management, and when finding any problems, I should consult others for solutions in order to cut down the time I spent on thinking the problem by myself.",
" Essentially, I learned that I need to plan better.",
" However, I learnt that I had all the information in my story it's just the way I was presenting it that was wrong. He taught me how to restructure it.",
" I learnt from it I need divide my project into small steps, and check whether it works after each small step, rather than go into one way for a long time until finding it is wrong.",
" After that, I learned to be vigilant about coordinating with people; I would managed to coordinate a photographer and a videographer a week in advance of a performance, and double check with the rest of the executive board that we certainly have them.",
" Hopefully it will resurge again but what I learned is a smarter way to approach volatile investing like this: while it is tempting for me to just sit and wait and hope that it goes up, I believe that I need to put precautionary methods in place to capitalize on the volatile nature of bitcoin. I need to come up with pre-set rules to determine when I will buy and sell instead of just ad-hocly hoping that I get lucky as I am doing now. Hopefully I will actually implement this my future investing strategies.",
"  I learned that while I still should always push myself, I should not make commitments that drain me and leave me without sleep because I end up not being present in all of the things I do, and it is unhealthy.",
" I learned my lesson about lecture habits, and still sit as close to the front as I can today.",
" In the end, I learned that every situation can be approached from multiple angles, and that one should strive to approach from the most positive angle they can.",
" I realized quickly, in my first weeks there, that there are actions beyond just moral issues that implicated those around you...especially when it comes to the user experience online, on a site that millions of people read. I was so careful and cognizant going forward. This incident makes me think of not only the intended user experience, but also the one that occurs as a result of non-intentions.",
" I learned both about noticing when I'm rushing/missing details, as well as the value of being self aware when receiving feedback,  and then trying to convey what led to issues whilst taking ownership for what I did wrong.",
" Within the scope of my education here at Columbia, I've enjoyed the protection I've had as a member within this institution and as I prepare to join the working world, I've realize I need to be more perceptive of my opportunities and my life decisions.",
" However I was wrong and I learned a true lesson on academic modesty and the dangers of thinking inside the box.",
" What I learned from this is that whenever you are learning something new, always make sure that you really understand it instead of having a shallow idea and starting to feel good about yourself.",
" I learned then the primal importance of knowing your audience - the purpose of typing up the call was for the analyst, not myself.",
" I learned that day on the true importance of orienting one's compass before just diving into the workflow. If one of us had stopped to look around and recognize that this fun and exciting project would in no way fit their criteria (which it clearly didn't) we would have been able to put up a much better showing. I am the kind of person who really likes to dive into to things, sometimes without enough thought. It saves a lot of time to truly orient yourself before starting a large undertaking. Now, whenever I start something large, such as my project over the summer, or even small such as a homework question, I very carefully outline my criteria and idea and make sure that they will not just match up now, but down the road as well.",
" I understood that by reporting to my managers on time, they could better understand my progress and assign other colleagues to help me out with certain tasks.",
" I learnt to give up on some portions to get the majority of the credit",
" I learned that one can never 'over communicate' with their team. Although I thought we we're on the same page regarding me taking these summer classes while we worked on the project, clearly we we're not, and it's better to risk having your teammate tell you 'yes I get it!' in an annoyed manner because you're over communicating than to risk leave something uncommunicated.",
" It was embarrassing how long it took me to realize this, in addition to asking for help. It gave me better insight into efficient teamwork, and when I should admit that I need a second hand. After that, things moved slowly but surely and by the end we got our app to work.",
" Finally one of them offered the correct solution, and from this I learned to ask for help earlier when struggling and not assume that others would not know better than I would",
" After this incident, whenever I work on a team project I try to understand each person's underlying motivations and goals.",
" I learned to slow down my thinking and consider different approaches before starting a project, and realized the influential power of teammates.",
" I learned that it's ok to rely on other people and not everything has to fall on my shoulders.",
" Though I had a misunderstanding about what the requirements were and put effort into a project without understanding the scope of it, I learne when working on a project/feature that multiple teams need to be involved in, one needs to collaborate with the teams when coming up with the specs for the project. For example, if I had worked with the engineering team more thoroughly when planning out the features then alot of the features I suggested could have been simplified and thought out more to be made feasible to build. Collaboration in project and work environments is key to successful product building and execution",
" What I learned from these experiences, was to be more open minded and to speak up when I have questions or concerns. By doing so, by the final homework my team had much better coordination and also more success through discussion. I am an outgoing person with my friends and those that I know, but in new situations I can be a little bit shy. This experience challenged me to speak up sooner, and I am looking forward to also challenging myself to speak up and participate in class. I like to participate in discussions and both share my own and listen to opinions of others, and it was this experience that taught me just how important that is. I especially feel for UI design just how important that would be, because it is not just the hidden underlying software, but what users have to interact with.",
" Through this all I learned a lot about creative leadership and how much of it centers around giving the talented group I have brought together the space to be amazing.",
" I learned from this experience that it is not only vital for team members to split up work evenly, but it is also important to establish early on exactly how this splitting up of work can be made as seamless as possible.",
" But then after I explored plenty of frameworks and concepts, I realized I made two false assumptions at once. The newest solutions might not be the best solutions in terms of completion level (solve one problem effectively but not for the others, especially corner cases), community maturity (the number of active developers), etc. And my colleagues may not want to invest their time in new stuffs so I can only be more productive on my own using the new solutions but not in a team.",
" In addition, I learned that team communication was vital as soon as you realize that something is wrong, so that everyone is up to date with recent changes and can adapt to the situation.",
" So group management with early start is the most important thing I learned from class group projects.",
"  From then on, I realized the importance of communicating immediately with team members if a problem arises or some other obstacle stands in my way. This was especially helpful for my term project in PLT, when we built our own language, as there was constantly issues we needed to fix in order to have our presentation done in time.",
" I learned to spot mistakes early on and also to ask for guidance and mentorship when needed.",
" After this thing, I realized the importance of communication in teamwork, and I always try to communicate with my teammates as our project progress to make sure our work is on right track.",
" Then, during the presentation, we found other teams' projects were quite awesome, far better than ours. This thing taught me a lesson to never think my effort is enough, and do as best as I can.",
" I should have shared this problem with teammates earlier, and after this experience, I have learned the importance of sharing information in a team.",
"  I learned to be more open minded about new or unfamiliar tech and platforms and being more mindful about using the right tool for the right job and exploring options to be sure of that and to hear out my teammates more.",
" What I learned from this experience is that whenever developing an application based on certain requirements, always think through from different perspectives on what can be some potential bottlenecks on the performance of an app. Only after we figure out the performance that we need to achieve, we can think about something extra that will make our product better.",
" Based on the outcome of this case, I learned the importance of consistently questioning one's self over choice of design for a client's use and whether all information over a particular system is being correctly applied for optimal performance.",
" I spent the rest of the summer learning Qt and attempting to build a UI that better communicated what my tool was capable of.",
"I am currently doing a databases project, and made a lot of mistakes, but learned a lot from it.",
" It was not a waste of time but a learning experience for me and I hope I can continue to use this newfound understanding in future projects.",
" However, upon looking at the homework solution afterwards I fully understood the concept and was able to implement shading calculations correctly and without any issues on later assignments.",
" I realized that I was more interested in understanding the client and how to translate his/her intentions visually. Given my psychology background and my specific interest in judgment and decision-making, I am particularly interested in how people interact with design and how different design influences perception and behavior. Thus, although I was wrong about predicting I would enjoy graphic design, it led to me figuring what kind of design I do want to pursue, so I do not regret taking the course at all!",
" The experience made me realize how important design principles are in tech and how much I have to learn about them.",
" It turned out well, and I realized it was actually a pretty elegant framework.",
" Once I realized how much time I was saving, I picked up his advice and dropped my preconceived notions about how to program.",
" It was an important lesson to be sure, and I look forward to learning more like it in this class.",
" From this experience, I learned that clean design does not necessarily mean minimalism, and user testing is invaluable to the process of design.",
" After further investigation we realized that the best way to approach the problem was to focus on many different types of users and not only the higher ranked users, in order to create the perfect solution that works for all ranks.",
" What I've learnt from it is that we should first make up a frame and then add features little by little, and at the meantime we should keep testing the new features.",
" Latter, I find that I am wrong. Because in most case, I need to analyze what should my page display and then try to arrange the components on the page. I am very eager to take this UI course, because I think being a full stack developer you not only need to know how to code, but also need to know how to design!!",
" However, when I did not receive good response in my presentation regardless I did lots of work, I noticed that skills in user interface design is really important.",
" I learned that sometimes the simplest can sometimes beat the most innovative. While it is good to push society sometimes out of their comfort zone to try new technology, I now strive to build solutions that are better suited for the end user.",
" That made me awared that the importance of UI/UX and started to learn how to make better user interface.",
" I still have maybe not learned this but I did learn how to work with React.",
" I learned that painful day that computers are unintuitive machines, and it is up to me to make sure everything is perfectly aligned to pave the way for meaningful code.",
" Although my team and I were building a very functional product, we realized how important it was that we paid attention to how our platform provided unique features that got our users excited even while performing often mundane tasks (like troubleshooting network connectivity).",
" I learned that a lot of times, we spend an incredibly unnecessary amount of time trying to look at the specifics, and think about problems with their intricate details and convoluted meanings, but the beauty of computer science is that sometimes, its just a simple little thing that we overlook!",
" I learnt from it we need to add functional click on webpages, using JQuery or functions in HTML called JSP page.",
" Then I try to look through Pinterest, and want to learn something about user interface design. But that is not enough, that's why I want to join this class.",
" So before our final presentation, I changed the complete look and feel of our web application. During our final presentation to JP Morgan, the employees were particularly happy with our UI and one of them even mentioned that we stood out from the rest of the projects because of our UI.",

" This incident taught me how having a good UI helps build a terrific first impression which goes a long way in the end user's satisfaction in a product.",
" I learned that day how incredibly complex and creative design could be, with extreme out of box thinking and pattern matching, and I resolved from then on to try my best to learn. It's been two years, and I'm no expert, but I do think my powerpoints look a lot better than they did before!",
"I thought it was improbably that one could do production level machine learning by using only a few thousand hand labeled training data, but it turns out you can and facebook does that.",
" So I learnt Bootstrap and Flask by myself. And finally, I did a good job.",
" After developing that layout halfway through, then I realized that we need to have paging mechanism otherwise user has to scroll through endlessly to find his/her options. Also, when a user clicks back button, he / she has to go back to the same location on the page where the user was previously and not the start of the page.",
" I realized that one of the most valued characteristics of a good UI is letting people have as much control as possible, so as to satisfy all groups of users.",
" I learned to always give myself more time to travel to new places to account for delays in transportation and getting lost."
]

stemmer = PorterStemmer()

count = 0
new_documents = []

for document in documents:
    no_punc = document.translate(None, string.punctuation)
    word_list = no_punc.split()
    stem_chars = [stemmer.stem(word) for word in word_list]
    new_doc = ' '.join(stem_chars)
    new_documents.append(new_doc)
    count += 1

#print(new_documents)

my_additional_stop_words = sys.argv[1].split()
new_stop_words = []
for word in my_additional_stop_words:
    #print(word)
    stem_chars = [stemmer.stem(word)]
    new_word = ' '.join(stem_chars)
    new_stop_words.append(new_word)

sample = text.ENGLISH_STOP_WORDS.union(new_stop_words)
vectorizer = TfidfVectorizer(stop_words=sample)
X = vectorizer.fit_transform(new_documents)

true_k = 10
model = KMeans(n_clusters=true_k, init='k-means++', max_iter=100000, n_init=1)
model.fit(X)

clusters = [[],[],[],[],[],[],[],[],[],[]]


#print("Top terms per cluster:")
order_centroids = model.cluster_centers_.argsort()[:, ::-1]
terms = vectorizer.get_feature_names()
#print(terms)
for i in range(true_k):
    print("Cluster %d:" % i),
    for ind in order_centroids[i, :10]:
        clusters[i].append(str(terms[ind]))
        print(' %s' % terms[ind]),
    print

#print(clusters)

print_dict = [[],[],[],[],[],[],[],[],[],[]]


#print(model.cluster_centers_)
vals = []
test = vectorizer.transform(new_documents)
count = 0
for x in test:
    x_str = str(x)
    lst = x_str.split(')')
    min = 1.0
    for number in range(1,len(lst)):
        parsed = (lst[number])[1:8]
        flt = float(parsed)
        if (flt < min):
            min = flt

    vals.append(min)
    count = count + 1
#print (vals)
#print (count)
#print(model.predict(test))
#print(model.inertia_)

ind = 0
for doc in documents:
    Y = vectorizer.transform([doc])
    prediction = model.predict(Y)


    print_dict[prediction[0]].append((str(doc), vals[ind]))
    ind = ind + 1

print_dict[0].sort(key=lambda tup: tup[1])
print_dict[1].sort(key=lambda tup: tup[1])
print_dict[2].sort(key=lambda tup: tup[1])
print_dict[3].sort(key=lambda tup: tup[1])
print_dict[4].sort(key=lambda tup: tup[1])
print_dict[5].sort(key=lambda tup: tup[1])
print_dict[6].sort(key=lambda tup: tup[1])
print_dict[7].sort(key=lambda tup: tup[1])
print_dict[8].sort(key=lambda tup: tup[1])
print_dict[9].sort(key=lambda tup: tup[1])

max = -1
#use json
count = 0
print("[[0]]: ")
for a in print_dict[0]:
    print("<br>")
    print(a[0])
    print(a[1])
    print("<br>")
    if (count > max):
        break
    count += 1

count = 0
print("[[1]]: ")
for a in print_dict[1]:
    print("<br>")
    print(a[0])
    print(a[1])
    print("<br>")
    if (count > max):
        break
    count += 1

count = 0
print("[[2]]: ")
for a in print_dict[2]:
    print("<br>")
    print(a[0])
    print(a[1])
    print("<br>")
    if (count > max):
        break
    count += 1
count = 0
print("[[3]]: ")
for a in print_dict[3]:
    print("<br>")
    print(a[0])
    print(a[1])
    print("<br>")
    if (count > max):
        break
    count += 1
count = 0
print("[[4]]: ")
for a in print_dict[4]:
    print("<br>")
    print(a[0])
    print(a[1])
    print("<br>")
    if (count > max):
        break
    count += 1
count = 0
print("[[5]]: ")
for a in print_dict[5]:
    print("<br>")
    print(a[0])
    print(a[1])
    print("<br>")
    if (count > max):
        break
    count += 1
count = 0
print("[[6]]: ")
for a in print_dict[6]:
    print("<br>")
    print(a[0])
    print(a[1])
    print("<br>")
    if (count > max):
        break
    count += 1
count = 0
print("[[7]]: ")
for a in print_dict[7]:
    print("<br>")
    print(a[0])
    print(a[1])
    print("<br>")
    if (count > max):
        break
    count += 1
count = 0
print("[[8]]: ")
for a in print_dict[8]:
    print("<br>")
    print(a[0])
    print(a[1])
    print("<br>")
    if (count > max):
        break
    count += 1
count = 0
print("[[9]]: ")
for a in print_dict[9]:
    print("<br>")
    print(a[0])
    print(a[1])
    print("<br>")
    if (count > max):
        break
    count += 1
count = 0


sys.stdout.flush()
#print("\n")
#print("Cluster Groups:")

#for doc in new_documents:
#    Y = vectorizer.transform([doc])
#    prediction = model.predict(Y)
#    print(str(doc) + ": " + str(prediction))
