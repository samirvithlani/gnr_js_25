#any
data = [0,0,0,1,2,0]
print(any(data))

password = "123"
print(any(c.isupper() for c in password))

#all

marks = [33,34,35]
print(all(m>=30 for m in marks))

#zip
name = ["raj","parth","jay"]
age = [23,24,23]

for i,j in zip(name,age):
    print(i,"-",j)
    


#sorted    

students =[("ram",80),("shyam",83),("amit",86)]

#result = sorted(students)
#result = sorted(students,key=lambda x:x[1])
#result = sorted(students,key=lambda x:x[0])
#result = sorted(students,key=lambda x:x[0],reverse=True)
result = sorted(students, key= lambda x : len(x[0]))


#sorted... sort by 0 index but len of name...
print(result)

#map

#map wil return all element..
data  =[100,200,300,400,500,600]

x  = map(lambda x : x+10,data)
print(list(x))

y = filter(lambda x: x>300,data)
print(list(y))

names = [None,"","amit","raj","","kunal"]
names1 = list(filter(lambda x: x ,names))
print(names1)

#Map + zip
a = [1,2,3]
b = [4,5,6]

#[5,7,9]
ans = map(lambda x:x[0]+x[1],zip(a,b))
print(list(ans))

#first name last name

fname =["virat","rohit","ms"]
lname = ["kohli","shrma","dhoni"]
