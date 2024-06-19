## expo router tutorial

- create a index.tsx under app folder
- a \_layout.tsx file will help to stack up all pages in the same folder

```javascript
<Stack.Screen name="index" options={{ title: "Home" }}></Stack.Screen>
```

- create index.tsx under register folder
- we need add another stack for top HomeLayout

```javascript
<Stack.Screen
  name="register/index"
  options={{ title: "Register" }}
></Stack.Screen>
```

- and add a link in the index folder under app to register

```javascript
<Link href="/register">click on me </Link>
```

- now we can insert Button with in Link, but we also need to add asChild attribute to Link

```javascript
<Link href="/register" asChild>
  <Button title="btn" />
</Link>
```

-we can add button on heade within Stack.Screen

```javascript
options={{
          title: "Register",
          headerRight: () => (
            <Pressable
              onPress={() => {
                router.push("/login");
              }}
            >
              <Text style={{ color: "white" }}>Login</Text>
            </Pressable>
          ),
        }}
```

- we can also create another folder for grouping so we dont need index.tsx within, if we create a \_layout.tsx whithin (tabs), it will show tabs instead stacks

```javascript
export default function TabsLayout() {
  return <Tabs></Tabs>;
}
```

- we can access (tabs)/one.tsx from app/index.tsx

```javascript
<Link href="/one" asChild>
  <Text>Tab one</Text>
</Link>
```

- and go back with useRouter from app/(tabs)/one.tsx

```javascript
const router = useRouter();
return (
  <Pressable onPress={() => router.back()}>
    <Text>back</Text>
  </Pressable>
);
```

- we need to create <Tabs.Screen></Tabs.Screen> in order to modify tabs as we like,
  we can also put a back link with useRouter on left of header os tab

```javascript
      <Tabs.Screen
        name="one"
        options={{
          headerTitle: "ONE",
          tabBarLabel: "one",
          headerLeft: () => (
            <Pressable onPress={() => router.back()}>
              <Text>back</Text>
            </Pressable>
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="two"
        options={{ headerTitle: "TWO", tabBarLabel: "two" }}
      ></Tabs.Screen>
```

- we will create another stack page under (tabs), first we need to create posts folder then we can create posts file under the folder then we can reach it with href:"posts/posts" however by convenient it is better to create an index file under every folder and reach it with href:"posts" (posts/index is not necessary)

```javascript
<Tabs.Screen
  name="posts/index"
  options={{ headerTitle: "Post", tabBarLabel: "post" }}
></Tabs.Screen>
```

- create links on posts page (index.tsx)

```javascript
      <Link href="/page/posts/1">post 1</Link>
      <Link href="/page/posts/2">post 2</Link>
      <Link href="/page/posts/3">post 3</Link>
```

- create a new Stack.Screen in \_layout

```javascript
<Stack.Screen name="[id]" options={{ headerShown: false }}></Stack.Screen>
```

- lastly create a dynamic page which name is [id].tsx

```javascript
const { id } = useLocalSearchParams();
return (
  <View>
    <Text>Post- {id}</Text>
  </View>
);
```

- <Link href="/page/posts/1">post 1</Link> roots it is needed to be accessed from top
- if there is no root error in the layout, it is either wrong href or it shouldn't be there.
- <Stack.Screen name="name" must be just a name and somtimes folder/>name
