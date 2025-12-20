#groupby

from itertools import groupby

data = sorted(["apple","banana","cat","ball","dance"])

for k,j in groupby(data,key=lambda x:x[0]):
    print(k,list(j))