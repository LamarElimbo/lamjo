import pickle
from models import Tweets
from mongoengine.queryset.visitor import Q
import json


def get_neg_values(p_cats):
    
    neg_scores = []
    
    for nom in p_cats:
        neg_sent_query = Tweets.objects(Q(nominee = nom) & Q(sentiment = 'neg')).count()
        neg_scores.append(neg_sent_query)
        
    def roundup (n) :
        return 10*((n+9)//10)
    
    neg_highest_value = max(neg_scores)

    neg_graph_height = roundup(neg_highest_value)

    return neg_scores, neg_graph_height

def get_pos_values(p_cats):
    
    pos_scores = []
    
    for nom in p_cats:
        pos_sent_query = Tweets.objects(Q(nominee = nom) & Q(sentiment = 'pos')).count()
        pos_scores.append(pos_sent_query)
        
    def roundup (n) :
        return 10*((n+9)//10)
    
    pos_highest_value = max(pos_scores)

    pos_graph_height = roundup(pos_highest_value)

    return pos_scores, pos_graph_height