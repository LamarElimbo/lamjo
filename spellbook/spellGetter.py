import gensim
import csv
from nltk.tokenize import word_tokenize as tokenize
import codecs 
from operator import itemgetter

def readCSV():

    spellSet = {}

    m = codecs.open('./spellbook/Spells.csv', "r",encoding='utf-8', errors='ignore')
    reader = csv.DictReader(m)

    for row in reader:
        for column, value in row.items():
            spellSet.setdefault(column, []).append(value)


    return spellSet


def collectDocs():
    
    spellSet = readCSV()
    
    spellIndex = spellSet['Index']
    spellTags = spellSet['Spell Tags']
    spellTitles = spellSet['Spell Title']
    spells = spellSet['Spells']
    spellSource = spellSet['Source Show']
    spellDescription = spellSet['Spell Description']
    
    print('Number of documents: ', len(spellTags))
    
    return spellIndex, spellTitles, spellTags, spells, spellSource, spellDescription


def tokenizeDocs():
    
    spellIndex, spellTitles, spellTags, spells, spellSource, spellDescription = collectDocs()
    
    gen_docs = [[w.lower() for w in tokenize(text)] for text in spellTags]
    
    return spellIndex, spellTitles, gen_docs, spells, spellSource, spellDescription


def main():
    spellIndex, spellTitles, docs, spells, spellSource, spellDescription = tokenizeDocs()
    dictionary = gensim.corpora.Dictionary(docs)
    corpus = [dictionary.doc2bow(docs) for docs in docs]
    tf_idf = gensim.models.TfidfModel(corpus)
    s = 0
    
    for i in corpus:
        s += len(i)
        
    sims = gensim.similarities.Similarity('.', tf_idf[corpus], num_features=len(dictionary))
    return spellIndex, spellTitles, spells, spellSource, spellDescription, dictionary, tf_idf, sims
    
    
def search(searchInput):
    spellIndex, spellTitles, spells, spellSource, spellDescription, dictionary, tf_idf, sims = main()
    query_doc = [w.lower() for w in tokenize(searchInput)]
    query_doc_bow = dictionary.doc2bow(query_doc)
    query_doc_tf_idf = tf_idf[query_doc_bow]
    
    similar = sims[query_doc_tf_idf]
    pairedSims = list(zip(spellIndex, spellTitles, similar, spells, spellSource, spellDescription))
    
    sortedSimilar = sorted(pairedSims, key=itemgetter(2))
    mostSimilar = [simSpell for simSpell in sortedSimilar if simSpell[2] > 0.0999]
    print('Most similar: ', mostSimilar)
    return mostSimilar[::-1]
        