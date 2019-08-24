const ls = new LoadScreen( renderer ).onComplete( init ).start( ASSETS );

function init() {
    ls.remove( animate);
}