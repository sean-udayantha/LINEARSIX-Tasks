select name
from `group`
where name LIKE 'TEST-%'
AND id NOT IN (select DISTINCT groupID from groupMembership);
