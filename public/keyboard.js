export default function createKeyboardListener(document) {
        const state = {
            observers: []
        }

        function subscribe(callbackFunction) {
            state.observers.push(callbackFunction)
        }

        function unsubscribe(callbackFunction) {
            const index = state.observers.indexOf(callbackFunction)
            if (index >= 0)
                state.observers.splice( index, 1 );
        }

        function notifyAll(command) {
            for (const callbackFunction of state.observers)
                callbackFunction(command)
        }

        function handleKeyDown(event) {
            const keyPressed = event.key
            const command = {
                playerId: 'player1', 
                keyPressed
            }
            notifyAll(command)
        }

        document.addEventListener('keydown', handleKeyDown)

        return {
            subscribe,
            unsubscribe,
        }
    }