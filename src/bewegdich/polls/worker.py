from threading import Thread
import controller
import time

class SeachWorker(Thread):
   def __init__(self, queue, resultqueue):
       Thread.__init__(self)
       self.queue = queue
       self.resultqueue = resultqueue

   def run(self):
       while True:
           # Get the work from the queue and expand the tuple
           route = self.queue.get()
           result = controller.find_best_station(route)
           if type(result) == int:
               print("ERROR")
           self.resultqueue.append(result)
           self.queue.task_done()