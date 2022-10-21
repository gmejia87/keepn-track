USE keepntrack;

INSERT INTO department
    (name)
VALUES
    ('Stem'),
    ('Labor'),
    ('Delivery');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Stem Manager', 100000, 1),
    ('Driver', 50000, 1),
    ('CLS', 90000, 1),
    ('Labor Manager', 100000, 2),
    ('Collector', 75000, 2),
    ('Labor Clerk', 40000, 2),
    ('Team Lead', 75000, 3),
    ('Collector Lead', 75000, 3),
    ('Delivery Clerk', 40000, 3);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Daffy', 'Duck', 1, NULL),
    ('Minni', 'Mouse', 2, 1),
    ('Cindy', 'Lu', 3, 1),
    ('The', 'Grinch', 4, NULL),
    ('Mayor', 'Maywhoo', 5, 4),
    ('Simon', 'Says', 6, 4),
    ('Nemo', 'Fish', 7, NULL),
    ('Dory', 'Degen', 8, 7),
    ('Sally', 'Squid', 9, 7);