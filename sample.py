from sklearn.feature_extraction import text
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.cluster import KMeans
from sklearn.metrics import adjusted_rand_score
from nltk.stem.porter import *
import string
import sys
import numpy as np

documents = [
"one one one one one one one TWO",
"one one one one one one one one one TWO TWO",
"one one one one one one one one one one one one TWO TWO",
"one one TWO TWO TWO TWO TWO TWO TWO TWO TWO TWO",
"one TWO TWO TWO TWO TWO TWO TWO TWO TWO TWO TWO TWO",
"one one one TWO TWO TWO TWO TWO TWO TWO TWO TWO TWO TWO TWO",
"one one TWO"
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
    print(word)
    stem_chars = [stemmer.stem(word)]
    new_word = ' '.join(stem_chars)
    new_stop_words.append(new_word)

print(new_documents)

sample = []#text.ENGLISH_STOP_WORDS.union(new_stop_words)
vectorizer = TfidfVectorizer(stop_words=sample)
X = vectorizer.fit_transform(documents)

true_k = 3
model = KMeans(n_clusters=true_k, init='k-means++', max_iter=100000, n_init=1)
model.fit(X)

#print(model.labels_)
{i: np.where(model.labels_ == i)[0] for i in range(model.n_clusters)}


print("Top terms per cluster:")
order_centroids = model.cluster_centers_.argsort()[:, ::-1]
print(order_centroids)
#rint(KMeans.predict(documents[0]))
terms = vectorizer.get_feature_names()
#print(terms)
for i in range(true_k):
    print("Cluster %d:" % i),
    for ind in order_centroids[i, :10]:
        print(' %s' % terms[ind]),
    print

#print(clusters)

print_dict = [[],[],[],[],[],[],[],[],[],[]]

for doc in documents:
    Y = vectorizer.transform([doc])

    # distance to each cluster: lower means closer
    print(Y)

    prediction = model.predict(Y)
    print_dict[prediction[0]].append((str(doc), Y))

print(print_dict)

if print_dict[0][0][1][0,1] > .5:
    print(print_dict[0][0][0][1])
    print_dict[0].sort(key=lambda tup: tup[1][0,0])
    print("[[0]]: ")
    for a in print_dict[0]:
        #print("<br>")
        print(a[0])
        for x in a[1]:
            print (x[0,0])
else:
    print_dict[0].sort(key=lambda tup: tup[1][0,1])
    print("[[0]]: ")
    for a in print_dict[0]:
        #print("<br>")
        print(a[0])
        for x in a[1]:
            print (x[0,1])

if print_dict[1][0][1][0,1] > .5:
    print (print_dict[1][0][0][1])
    print_dict[1].sort(key=lambda tup: tup[1][0,0])
    print("[[1]]: ")
    for a in print_dict[1]:
        #print("<br>")
        print(a[0])
        for x in a[1]:
            print (x[0,0])
else:
    print_dict[1].sort(key=lambda tup: tup[1][0,1])
    print("[[1]]: ")
    for a in print_dict[1]:
        #print("<br>")
        print(a[0])
        for x in a[1]:
            print (x[0,1])

#use json
#count = 0
#print("[[0]]: ")
#for a in print_dict[0]:
    #print("<br>")
#    print(a[0])
#    for x in a[1]:
#        print (x[0,1])

#print("[[1]]: ")
#for a in print_dict[1]:
    #print("<br>")
#    print(a[0])
#    for x in a[1]:
#        print (x[0,0])

print("[[2]]: ")
for a in print_dict[2]:
    print(a[0])
    for x in a[1]:
        print (x[0,1])
print("[[3]]: ")
for a in print_dict[3]:
    print("<br>")
    print(a)
    print("<br>")
    if (count > 1):
        break
    count += 1
count = 0
print("[[4]]: ")
for a in print_dict[4]:
    print("<br>")
    print(a)
    print("<br>")
    if (count > 1):
        break
    count += 1
count = 0
print("[[5]]: ")
for a in print_dict[5]:
    print("<br>")
    print(a)
    print("<br>")
    if (count > 1):
        break
    count += 1
count = 0
print("[[6]]: ")
for a in print_dict[6]:
    print("<br>")
    print(a)
    print("<br>")
    if (count > 1):
        break
    count += 1
count = 0
print("[[7]]: ")
for a in print_dict[7]:
    print("<br>")
    print(a)
    print("<br>")
    if (count > 1):
        break
    count += 1
count = 0
print("[[8]]: ")
for a in print_dict[8]:
    print("<br>")
    print(a)
    print("<br>")
    if (count > 1):
        break
    count += 1
count = 0
print("[[9]]: ")
for a in print_dict[9]:
    print("<br>")
    print(a)
    print("<br>")
    if (count > 1):
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
