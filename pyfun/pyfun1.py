from itertools import chain

a = [1,2,3,4]
b = [3,4]
c = [6,7,8]

#[1,2,3,4]
print(list(chain(a,b,c)))

x = (1,2,3)
y = (4,5,6)

x1 ="ram"
y1 ="seeta"

print(list(chain(x1,y1)))