#include <stdio.h>
#include <stdlib.h>

void toscreen(char* buffer, int height, int width) {
    system("clear");
    for (int i = 0; i < height; i++) {
        for (int j = 0; j < width; j++) {
            printf("%c", buffer[i * width + j]);
        }
        printf("\n");
    }

}

int main() {
    FILE* urandom = fopen("/dev/urandom", "r");
    int height = 51;
    int width = 101;
    char buffer[width * height];
    for (int i = 0; i < height; i++) {
        for (int j = 0; j < width; j++) {
            
        }
    }
    toscreen(buffer, height, width);
    return 0;
}