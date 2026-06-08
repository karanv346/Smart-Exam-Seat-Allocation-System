package src;
import java.io.*;
import java.util.*;

class Student {
    String usn;
    String name;

    Student(String usn, String name) {
        this.usn = usn;
        this.name = name;
    }
}

class Hall {
    String hallName;
    int capacity;

    Hall(String hallName, int capacity) {
        this.hallName = hallName;
        this.capacity = capacity;
    }
}

public class examseatallocation {

    public static void main(String[] args) {

        ArrayList<Student> students = new ArrayList<>();
        ArrayList<Hall> halls = new ArrayList<>();
        HashMap<String, String> seatMap = new HashMap<>();

        try {
            BufferedReader br =
                    new BufferedReader(
                            new FileReader("students.csv"));

            String line;

           
            br.readLine();

            while ((line = br.readLine()) != null) {

                String[] data = line.split(",");

                students.add(
                        new Student(
                                data[0].trim(),
                                data[1].trim()
                        )
                );
            }

            br.close();

        } catch (Exception e) {
            System.out.println("Error reading file.");
            return;
        }

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter number of halls: ");
        int n = sc.nextInt();
        sc.nextLine();

        for (int i = 0; i < n; i++) {

            System.out.print("Enter Hall Name: ");
            String hallName = sc.nextLine();

            System.out.print("Enter Capacity: ");
            int capacity = sc.nextInt();
            sc.nextLine();

            halls.add(new Hall(hallName, capacity));
        }

        int studentIndex = 0;

        System.out.println("\n===== SEAT ALLOCATION =====");

        for (Hall hall : halls) {

            System.out.println("\n" + hall.hallName);

            for (int seat = 1; seat <= hall.capacity; seat++) {

                if (studentIndex >= students.size())
                    break;

                Student s = students.get(studentIndex);

                System.out.println(
                        "Seat " + seat +
                                " -> " +
                                s.usn +
                                " " +
                                s.name
                );

                seatMap.put(
                        s.usn,
                        hall.hallName + " Seat " + seat
                );

                studentIndex++;
            }
        }

        if (studentIndex < students.size()) {

            System.out.println(
                    "\nStudents left unallocated:"
            );

            while (studentIndex < students.size()) {

                Student s = students.get(studentIndex);

                System.out.println(
                        s.usn + " " + s.name
                );

                studentIndex++;
            }
        }

        System.out.println("\n===== SEARCH STUDENT =====");

        System.out.print("Enter USN: ");
        String searchUSN = sc.nextLine();

        if (seatMap.containsKey(searchUSN)) {

            System.out.println(
                    "Seat Location: "
                            + seatMap.get(searchUSN)
            );

        } else {

            System.out.println(
                    "Student not allocated."
            );
        }

        sc.close();
    }
}