function loop () {
    _G('foo', 'bar');
    Log('Hello BotVS');
}

export default function main () {
    while(1) {
        loop();
        Sleep(3000);
    }
}