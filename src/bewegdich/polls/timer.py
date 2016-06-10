import time as t

timingactive = False

class Timer(object):
    """
    A small Timer which saves the time and prints it out with the given timerID

    """
    def __init__(self):
        self.timerList = {}

    def start(self,id):
        """
        Starts the Timer
        :param id: A name which identifies this timer
        """
        self.timerList[id] = t.time()


    def printTimer(self,id):
        """
        Prints the time between the calling of the functions "start()" and this function
        :param id: the id of the initialized timer
        """
        if timingactive:
            print("[" + round((t.time() - self.timerList[id]) * 1000, 0).__str__() + " ms] " + id)


