myStore = {
    displayError : true
}
myStore.set = function(key,val)  {
    if (localStorage)
        localStorage.setItem(key,val);
    else if(this.displayError)
        this.displayUnsupported()
    return this;
}
myStore.get = function(key)  {
    if (localStorage)
        return localStorage.getItem(key);
    else if(this.displayError)
        this.displayUnsupported()
    return false;
}
myStore.reset = function(key)  {
    this.set(key,undefined)
    return this;
}
myStore.clear = function()  {
    if (localStorage)
        localStorage.clear();
    else if(this.displayError)
        this.displayUnsupported()
    return this;
}
myStore.displayUnsupported = function()  {
    alert("Votre navigateur ne supporte pas le HTML5 et le stockage serveur. Impossible de mémoriser votre saisie.")
}


