### 1. **`ngOnChanges(changes: SimpleChanges)`**

- **Called:** Before `ngOnInit` and whenever one or more data-bound input properties change.
- **Use case:** Respond to changes to input properties.

```typescript
ngOnChanges(changes: SimpleChanges) {
  console.log('ngOnChanges', changes);
}
```

### 2. **`ngOnInit()`**

- **Called:** Once the component is initialized, after Angular has initialized all data-bound properties.
- **Use case:** Perform component initialization logic.

```typescript
ngOnInit() {
  console.log('ngOnInit');
}
```

### 3. **`ngDoCheck()`**

- **Called:** During every change detection run, immediately after `ngOnChanges` and `ngOnInit`.
- **Use case:** Custom change detection logic.

```typescript
ngDoCheck() {
  console.log('ngDoCheck');
}
```

### 4. **`ngAfterContentInit()`**

- **Called:** After Angular projects external content into the component's view.
- **Use case:** Respond after the component's content (e.g., `<ng-content>`) has been initialized.

```typescript
ngAfterContentInit() {
  console.log('ngAfterContentInit');
}
```

### 5. **`ngAfterContentChecked()`**

- **Called:** After every check of the component's projected content.
- **Use case:** Respond after Angular checks the content projected into the component.

```typescript
ngAfterContentChecked() {
  console.log('ngAfterContentChecked');
}
```

### 6. **`ngAfterViewInit()`**

- **Called:** After Angular initializes the component's views and child views.
- **Use case:** Respond after the component's view (and its children) has been initialized.

```typescript
ngAfterViewInit() {
  console.log('ngAfterViewInit');
}
```

### 7. **`ngAfterViewChecked()`**

- **Called:** After every check of the component's views and child views.
- **Use case:** Respond after Angular checks the component's view (and its children).

```typescript
ngAfterViewChecked() {
  console.log('ngAfterViewChecked');
}
```

### 8. **`ngOnDestroy()`**

- **Called:** Just before Angular destroys the component.
- **Use case:** Clean up before the component is removed from the DOM.

```typescript
ngOnDestroy() {
  console.log('ngOnDestroy');
}
```
