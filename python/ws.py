import time

from SimpleWebSocketServer import SimpleWebSocketServer, WebSocket

class SimpleEcho(WebSocket):

    def handleMessage(self):
        # echo message back to client
        print('Arrived',self.data)
        self.sendMessage(self.data)

    def handleConnected(self):
        print(self.address, 'connected')

    def handleClose(self):
        print(self.address, 'closed')

    def startPing():
    	while True:
        	print('Ping')
        	time.sleep(5)

server = SimpleWebSocketServer('', 8000, SimpleEcho)
server.serveforever()
