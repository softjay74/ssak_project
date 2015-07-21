# ssak 

보내주신 유저 시나리오와는 조금 달라서 간단히 정리 하였습니다. 

1. 회원 가입시 권한 신청
2. Admin 관리자가 회원 신청을 확인 한 후 해당 권한 부여
3.  User ID로 가입신청 
(User  Scenario 에서는 User ID가 Email 로 하는것으로 되어 있었으나 Email 인증등의 과정을 거쳐야 해서 그냥 생략함)
4. 회원가입시 ID 중복 Check 하지 않습니다. 


DB 접속 정보
mySql 에 DB를 생성하신후 server.js 에서 DB 접속 정보를 수정하세요. 

관련 테이블
아~!! DB 생성시 user_id를 key로 잡아야 했으나 테스트이기에 그냥 테이블만 생성했습니다. 
member 테이블을 생성하세요. 
(필드 이름만 같으면 됩니다. )

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

최고 관리자 Data 입력 해 주셔야겠죠 ^^
user_auth 에 "Admin" 이라고 입력 해주시면 됩니다. 

