int l_seed;

void seed(int s){
    l_seed = s;
}

int random(){
    int a = l_seed<<3;
    int b = l_seed>>5;
    l_seed = a^b;
    return l_seed;  
}