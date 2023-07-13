#!/bin/bash

sed -i "" "s/@param number id/@param string id/g" "src/deltas/domain/entities/proposals.ts"
sed -i "" "s/id: number/id: string/g" "src/deltas/domain/entities/proposals.ts"
sed -i "" "s/@param number id/@param string id/g" "src/deltas/domain/entities/blockedactns.ts"
sed -i "" "s/id: number/id: string/g" "src/deltas/domain/entities/blockedactns.ts"

./scripts/replace.pl src/deltas/domain/entities/proposals.ts 'new Proposals\(\n*\s*0' "new Proposals('0'"
./scripts/replace.pl src/deltas/domain/entities/blockedactns.ts 'new Blockedactns\(\n*\s*0' "new Blockedactns('0'"

sed -i "" "s/id || 0/id.toString() || '0'/g" "src/deltas/data/mappers/blockedactns.mapper.ts"
sed -i "" "s/id || 0/id.toString() || '0'/g" "src/deltas/data/mappers/proposals.mapper.ts"