import java.util.Scanner;

public class FirstBank {
   
   public static void main (String [] args){
      // TODO Auto-generated method stub
      Scanner sc = new Scanner(System.in);
      
      System.out.print("Enter your name: ");
      String userName = sc.nextLine();
      
      System.out.print("Enter your ID: ");
      String id = sc.nextLine();
      
      Account name = new Account (userName, id);
      name.showMenu();
      
   }
}