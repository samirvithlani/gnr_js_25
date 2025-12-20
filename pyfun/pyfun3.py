from functools import reduce
from operator import add,mul

data = [1,2,3,4,5]

x = reduce(lambda a,b: a+b,data,0)
print(x)

print(reduce(add,[1,2,3]))
print(reduce(mul,[1,2,3]))

print(format(3.14159,'.2f'))
print(format(255,'b'))