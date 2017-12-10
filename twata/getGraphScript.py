import pickle

def getXCats():
    currentScores = open('./twata/sentimentClassifier/xScores.pkl', 'rb')
    negScores, posScores = pickle.load(currentScores)
    currentScores.close()
    
    x_keys_ordered = sorted(list(val[0] for val in negScores.items()))
    
    return x_keys_ordered

def getNegScript():
    
    currentScores = open('./twata/sentimentClassifier/xScores.pkl', 'rb')
    negScores, posScores = pickle.load(currentScores)
    currentScores.close()
    
    neg_latestScores_ordered = sorted(list(val[1] for val in negScores.items()))
        
    def roundup (n) :
        return 10*((n+9)//10)
    
    neg_highestValue = max(neg_latestScores_ordered)

    neg_graphHeight = roundup(neg_highestValue)

    return neg_latestScores_ordered, neg_graphHeight

def getPosScript():
    
    currentScores = open('./twata/sentimentClassifier/xScores.pkl', 'rb')
    negScores, posScores = pickle.load(currentScores)
    currentScores.close()
    
    pos_latestScores_ordered = sorted(list(val[1] for val in posScores.items()))
    
    def roundup (n) :
        return 10*((n+9)//10)
    
    pos_highestValue = max(pos_latestScores_ordered)

    pos_graphHeight = roundup(pos_highestValue)
    
    return pos_latestScores_ordered, pos_graphHeight