# Ecommerce-final-project-DJANGO-backend-and-REACT-REDUX-front
פרויקט גמר קורס python full stack developer
הפרויקט הינו פרויקט ecommerce של אתר מכירות רשמי של מוצרי מועדון הכדורגל ריאל מדריד.
//האתר פותח על ידי מתן מיכאל מילנר במסגרת פרויקט גמר בקורס python full stack devolper במכללת ג'ון ברייס בתל-אביב.//
טכנולוגיות שבהן נשתמש בפרויקט הן:
•	Django- לצורך כתיבת ה-backend:login,register,CRUD
•	React-לצורך כתיבת ה-frontend:redux,component list ,gui for login register
•	Sqlite3-לצורך שמירת הDB
//תהליך התקנת הפרויקט//
מטרת המערכת:

מטרת האתר היא לאפשר לאוהדי קבוצת הכדורגל של ריאל מדריד לרכוש מוצרים דרך אתר המועדון הרשמי לספק חווית קנייה קלה ונוחה למשתמש הסופי.

מה המערכת כוללת:
DB,business logics,ממשק REST API מצד הfrontend.
במערכת יש שלושה סוגי משתמשים administrators, customers ו-anonymos.
קבוצת הכדורגל ריאל מדריד מעוניינת למכור מוצרים (products)לקהל לקוחותיה(customers) ובנוסף לאפשר לאורחים(anonymos) באתר לראות את מוצוריה.




טבלאות DB
טבלת PRODUCT-מכילה את רשימת המוצרים בפרטי המוצר קיימים הפריטים הבאים:איזה קטוגריה(FK,cat_id),                                               
Id של המוצר(PK)(AI),תיאור המוצר,מחיר המוצר,מועד הוספה,כמות,תמונה,inventory.
טבלת CATEGORIES-מכילה את רשימת הקטגוריות שיש באתר לכל קטגוריה יש id משלה ורשימת מוצרים שמשוייכת אל כל קטגוריה(תיאור הקטגוריה).
טבלת users- טבלה שמייצגת את כל משתמשי החנות האינטרנטית יש בה את רשימת הלקוחות הקיימים במאגר ואת רשימת המנהלים והצוות לכל user יש id(PK) ,שם פרטי,שם משפחה,כתובת,מספר טלפון,דואר אלקטרוני,כתובת וכדומה.
טבלת order details -מציגה לנו את פרטי כל ההזמנה: id(PK)  מחיר ,כמות,product_id(FK), oreders_id(FK).
טבלת orders- ID(PK) , כמות,סטטוס,מועד ההזמנה,customer_id(FK).


open the project:

1.open vs code
2.open the terminal in vs code and write the following to open the backend:
  a. git clone https://github.com/matanmichael/react-python-ecommerce-project.git
  b. cd .\react-python-ecommerce-project\Backend\
  c. pip install virtualenv
  d. py -m virtualenv myenv
  e. myenv\Scripts\activate
  f. pip install -r requirements.txt
  g. python manage.py runserver
3.open a new terminal in vs code and write the following to open the frontend:
  a. cd .\react-python-ecommerce-project\Frontend\my-store\
  b. npm i
  c. npm start
  
