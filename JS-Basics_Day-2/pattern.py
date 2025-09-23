# n = 4
# for i in range(n):
#     for l in range(i):
#         print("*",end="")
#     for j in range(2*(n-i)-1):
#         print(" ",end="")
#     for k in range(i):
#         print("*",end="")
#     print()



n = 7


for i in range(1, n):
    # leading spaces
    for j in range(n - i - 1, -1, -1):
        print(" ", end="")

    # increasing numbers
    for k in range(1, i + 1):
        print(k, end="")

    # decreasing numbers (mirror, excluding 1)
    for q in range(i - 1, 0, -1):
        print(q, end="")

    print()



def count(n):
    num = n
    count_s = 0
    while num > 0:
        num = num // 10
        count_s += 1
    return count_s



def sum_count(n):
    num = n
    sum = 0
    while num >0:
        sum += num % 10
        num = num // 10
    return sum


def palindrome(n):
    num = n
    pp = 0
    while num > 0 :
        pp *=10
        pp += num %10 
        num = num // 10
    return pp 

def check(n):
    if n == palindrome(n):
        return True
    else:
        return False
    
print(check(444))

name = "Hello"
print(name[-1])



def swap(arr, i, j):
    temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
# sort the array 
# everything is easier when you understand the logics

arr = [1,0,0,1,1,0,1,0,1,1]
i = 0
j = len(arr) -1

while i <= j:
    if arr[i] == 1:
        swap(arr, i, j)
        j -= 1 # transverse forward
    else:
        i += 1 # move 1 place ahead

print(arr)


dict = {}
txt = "javascript"

for i in txt:
    if dict[i] in dict:
        dict[i] += 1
    else:
        dict[i] = 1

print(dict[i])



