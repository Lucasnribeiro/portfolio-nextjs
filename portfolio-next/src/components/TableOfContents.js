import { Card, List, Text } from "@mantine/core";


export default function TableOfContents({contents}){

    function renderNestedList(contents) {
      const levels = { h2: 1, h3: 2, h4: 3, h5: 4 };
    
      // Create a map to track the nested structure
      const nestedMap = new Map();
    
      for (const content of contents) {
        const level = levels[content.tag];
        const item = { id: content.id, title: content.title, children: [] };
    
        if (!nestedMap.has(level)) {
          nestedMap.set(level, []);
        }
    
        nestedMap.get(level).push(item);
    
        // Check for any lower levels and attach them as children
        for (let i = level - 1; i >= 1; i--) {
          const parentItems = nestedMap.get(i);
          if (parentItems && parentItems.length > 0) {
            parentItems[parentItems.length - 1].children.push(item);
            break;
          }
        }
      }
    
      // Extract the top-level items
      const topLevelItems = nestedMap.get(1);
    
      const renderListItems = (items) => (
          <List listStyleType="disc">
              {items?.map((item) => (
                  <List.Item style={{ marginBottom: '10px' }} key={item.id}>
                      <a style={{ textDecoration: 'none', color: 'inherit' }} href={`#${item.id}`}>{item.title}</a>
                      {item.children.length > 0 && renderListItems(item.children)}
                  </List.Item>
              ))}
          </List>
      );
    
      return <div>{renderListItems(topLevelItems)}</div>;
    }

    return (
        <Card padding="lg" radius="sm" withBorder>
            <Text size={20} mb={30}> Sections </Text>
            {contents.length > 0 && renderNestedList(contents)}
        </Card>
    )
} 