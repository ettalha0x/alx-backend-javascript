console.log('Welcome to Holberton School, what is your name? \n');
process.stdin.on('data', function(name) {
    process.stdout.write('Your name is: ' + name);
    process.exit();
});