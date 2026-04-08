#include <stdio.h>
#include <errno.h>
#include <stdlib.h>
#include <string.h>


int main(int argc, char *argv[]) {
    FILE *fp;

    if(argc < 2){
        fp = stdin;
    }else{
        fp = fopen(argv[1], "r");
    }
    
    if(fp == NULL){
        perror("Error opening file");
        exit(-1);
    };

    char line[1024];

    while (fgets(line, sizeof(line), fp)){
        printf("%s", line);
    }
    
    
    if (fp != stdin) {
        fclose(fp);
    }
    return 0;
}