# ssak 

�����ֽ� ���� �ó������ʹ� ���� �޶� ������ ���� �Ͽ����ϴ�. 

1. ȸ�� ���Խ� ���� ��û
2. Admin �����ڰ� ȸ�� ��û�� Ȯ�� �� �� �ش� ���� �ο�
3.  User ID�� ���Խ�û 
(User  Scenario ������ User ID�� Email �� �ϴ°����� �Ǿ� �־����� Email �������� ������ ���ľ� �ؼ� �׳� ������)
4. ȸ�����Խ� ID �ߺ� Check ���� �ʽ��ϴ�. 


DB ���� ����
mySql �� DB�� �����Ͻ��� server.js ���� DB ���� ������ �����ϼ���. 

���� ���̺�
��~!! DB ������ user_id�� key�� ��ƾ� ������ �׽�Ʈ�̱⿡ �׳� ���̺� �����߽��ϴ�. 
member ���̺��� �����ϼ���. 
(�ʵ� �̸��� ������ �˴ϴ�. )

mysql> describe member;
+------------+------------------+------+-----+---------+----------------+

| Field      | Type             | Null | Key | Default | Extra          |

+------------+------------------+------+-----+---------+----------------+

| id         | int(11) unsigned | NO   | PRI | NULL    | auto_increment |

| user_id    | varchar(255)     | NO|     | NULL    |                |

| email      | varchar(255)     | NO   |     | NULL    |                |

| user_fname | varchar(255)     | NO   |     | NULL    |                |

| user_lname | varchar(255)     | NO   |     | NULL    |                |

| password   | varchar(25)      | NO   |     | NULL    |                |

| user_auth  | varchar(10)      | YES  |     | NULL    |                |

+------------+------------------+------+-----+---------+----------------+

�ְ� ������ Data �Է� �� �ּž߰��� ^^
user_auth �� "Admin" �̶�� �Է� ���ֽø� �˴ϴ�. 

