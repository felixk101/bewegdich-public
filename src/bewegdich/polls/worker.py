from threading import Thread
import controller

class SeachWorker(Thread):
   def __init__(self, queue, resultqueue,controller):
       Thread.__init__(self)
       self.queue = queue
       self.resultqueue = resultqueue
       self.controller = controller

   def run(self):
       while True:
           # Get the work from the queue and expand the tuple
           route = self.queue.get()
           result = self.controller.find_best_station(route)
           if type(result) == int:
               print("ERROR")
           self.resultqueue.append(result)
           self.queue.task_done()

class RoutesWorker(Thread):
   def __init__(self, queue, resultqueue,controller):
       Thread.__init__(self)
       self.queue = queue
       self.resultqueue = resultqueue
       self.controller = controller

   def run(self):
       while True:
           # Get the work from the queue and expand the tuple
           parameters = self.queue.get()
           station = parameters[0]
           dest = parameters[1]
           starttime = parameters[2]
           result = self.controller.get_routes(station.get_coords(), dest, starttime)
           if type(result) == int:
               print("ERROR")
           self.resultqueue.append([station,result])
           self.queue.task_done()