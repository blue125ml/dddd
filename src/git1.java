import com.sun.security.jgss.GSSUtil;

import java.util.Scanner;

public class git1 {

    public static void main(String[] args) {
        int value ;
        Scanner sc= new Scanner(System.in);

        int num= sc.nextInt();
        int cnt = 1;


        for(int i=1; i <= num; i++){
            System.out.println();
            for(int j=1; j<=i; j++){

                    System.out.print(cnt);
                    cnt ++;
                    while(cnt==10) {
                        cnt=0;
                        System.out.print(cnt);
                        cnt++;
                    }

                }

            }


        }




    }

