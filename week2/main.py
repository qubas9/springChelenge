import random


adj = open("adjectives.txt").read().splitlines()
nouns = open("nouns.txt").read().splitlines()
verb = open("verbs.txt").read().splitlines()
text = ""
for i in range(int(input("How many sentences do you want to generate? "))):

    text += (random.choice(adj).title() + " " + random.choice(nouns) + " " + random.choice(verb) + " " + random.choice(adj) + " " + random.choice(nouns)+". ")
print(text)