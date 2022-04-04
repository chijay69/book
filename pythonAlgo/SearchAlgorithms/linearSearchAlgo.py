from time import time


# Linear Search Algorithm fuction
def linearSearch(queue, query):
    ''' Define a function to use brute force to find the position of a number value in a list or array of numbers'''
    position = 0
    while True:
        try:
            if queue[position] == query:
                print (f"query: {query} is at position: {position}")
                break
        except IndexError:
            print("index out of range")
            break
        position+=1


# define parameters
queue = [i for i in range(10000*1000, 0 , -1)]
query = 4
# call the function

then = time()
linearSearch(queue, query)
print(f"time_difference = {time() - then} seconds")

