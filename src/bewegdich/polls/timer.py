import time as t

timingactive = False

class Timer(object):

    def __init__(self):
        self.timerList = {}

    def start(self,id):
        self.timerList[id] = t.time()

    def printTimer(self,id):
        if timingactive:
            print("[" + round((t.time() - self.timerList[id]) * 1000, 0).__str__() + " ms] " + id)


