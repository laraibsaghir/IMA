import {
    Avatar,
    Badge,
    Table,
    Group,
    Text,
    ActionIcon,
    Anchor,
    ScrollArea,
    useMantineTheme,
   
  } from '@mantine/core';
  import { IconPencil, IconTrash } from '@tabler/icons-react';
  import { useState } from 'react';
  
 

  const data = [
   
      {
        "avatar": "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
        "name": "Robert Wolfkisser",
        "job": "BusinessOwner",
        "email": "rob_wolf@gmail.com",
        "phone": "+44 (452) 886 09 12"
      },
      {
        "avatar": "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
        "name": "Jill Jailbreaker",
        "job": "BusinessOwner",
        "email": "jj@breaker.com",
        "phone": "+44 (934) 777 12 76"
      },
      {
        "avatar": "https://images.unsplash.com/photo-1632922267756-9b71242b1592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
        "name": "Henry Silkeater",
        "job": "BusinessOwner",
        "email": "henry@silkeater.io",
        "phone": "+44 (901) 384 88 34"
      },
      {
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
        "name": "Bill Horsefighter",
        "job": "BusinessOwner",
        "email": "bhorsefighter@gmail.com",
        "phone": "+44 (667) 341 45 22"
      },
      {
        "avatar": "https://images.unsplash.com/photo-1630841539293-bd20634c5d72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
        "name": "Jeremy Footviewer",
        "job": "BusinessOwner",
        "email": "jeremy@foot.dev",
        "phone": "+44 (881) 245 65 65"
      }
    
    ];
  
  export default function UsersTable() {
    const theme = useMantineTheme();
    const [tableData, setTableData] = useState(data);

  const handleDeleteRow = (name) => {
    setTableData((prevData) => prevData.filter((row) => row.name !== name));
  };

    const rows = tableData.map((item) => (
      <tr key={item.name}>
        <td>
          <Group spacing="sm">
            <Avatar size={30} src={item.avatar} radius={30} />
            <Text fz="sm" fw={500}>
              {item.name}
            </Text>
          </Group>
        </td>
  
        <td>
          <Badge
            
            style={{color:'black', textTransform:'lowercase'}}
            variant={theme.colorScheme === 'dark' ? 'light' : 'outline'}
          >
            {item.job}
          </Badge>
        </td>
        <td>
          <Anchor component="button" size="sm">
            {item.email}
          </Anchor>
        </td>
        <td>
          <Text fz="sm" c="dimmed">
            {item.phone}
          </Text>
        </td>
        <td>
          <Group spacing={0} position="right">
            <ActionIcon>
              <IconPencil size="1rem" stroke={1.5} />
            </ActionIcon>
            <ActionIcon color="red"  onClick={() => handleDeleteRow(item.name)}>
              <IconTrash size="1rem" stroke={1.5} />
            </ActionIcon>
          </Group>
        </td>
      </tr>
    ));
  
    return (
      <ScrollArea>
        <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Email</th>
              <th>Phone</th>
              <th />
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </ScrollArea>
    );
  }