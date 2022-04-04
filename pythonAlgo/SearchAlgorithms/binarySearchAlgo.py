'''
[0,1,2,3,4,5,6,7,8,9]
1. Divide the len of queue by 2 to get the approx middle position
2. Get the value at the mid position
3. Compare the value at mid position to query value
4. if higher than query value set the ho to mid position
5. If lower than query value set the lo to mid position
6. If equals to query position. break loop return value at position
7. Repeat
'''



def getMidPos(queue):
    print(f"the middle pos is {len(queue)//2}")
    return len(queue)//2

def getMidVal(queue, midpos):
    print(f"Middle value is {queue[midpos]}")
    return queue[midpos]

def compare(midVal, query):
    if midVal > query:
        print("query is lower so hi = midval+1")
        return "right"
    elif midVal < query:
        print("query is higher so lo = midval-1")
        return "left"
    elif midVal == query:
        return "ans"
    else:
        print("something otherworldly")


def BinarySearch(queue, query):
    ''' This is a binary search algo in python to find a value from a deck of cards '''
    lo = 0
    hi = len(queue)-1
    while lo <=hi:
        try: 
            mid_pos = getMidPos(queue)
            mid_val = getMidVal(queue, mid_pos)
            result = compare(mid_val, query)
            if result == "right":
                lo = mid_pos+1
                queue = queue[mid_pos+1:]
            if result == "left":
                hi = mid_pos-1
                queue = queue[:mid_pos-1]
            if result == "ans":
                print("Answer found")
                print (f"query:{query} is at position {mid_pos}")
                break
        except IndexError:
            print("out of bounds")
            print("query not found")
            break
    print("Empty list of cards")


queue =[9,7,7,7,5,4,4,4,4,4,3,2,1,1,0,0]
query = 4
print(f"query: {query}\nqueue: {queue}")
BinarySearch(queue, query)
